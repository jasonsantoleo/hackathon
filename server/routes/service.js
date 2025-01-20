const express=require('express');
const router=express.Router();
const mlservice=require('../services/MLservice');
const mlServiceInsights=require('../services/MLServiceInsights');

router.post('/analyze',async (req,res)=>{
try {
    const {item}=req.body;
    console.log(item)
    if (!item.name || !item.category || !item.expiryDate){
        return res.status(400).json({message:'Please fill all the fields'})
    }
    if (isNaN(new Date(item.expiryDate).getTime())){
        return res.status(400).json({message:'date not correct'})
    }
    const analyze=await mlservice.analyzeItem(item);

    if (!analyze){
        return res.status(500).json({
            message:"failed to analze"
        })
    }
    res.json({analyze,success:true})
} catch (error) {
    console.error(error);
    return res.status(500).json({message:"failed to analze"})
}
})
router.post('/insights/analyze', async (req, res) => {
    try {
        // Destructure all required fields
        const { salesData } = req.body;

        // Validate required fields
        if (!salesData.monthly_sales || !salesData.inventoryData || !salesData.customerData) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields: monthly_sales, inventoryData, and customerData are required'
            });
        }

        // Generate insights
        const analysis = await mlServiceInsights.generateInsights(salesData);
        
        if (!analysis || !analysis.insights) {
            return res.status(500).json({
                success: false,
                message: 'Failed to generate insights',
                error: analysis?.error || 'Unknown error occurred'
            });
        }

        return res.status(200).json({
            success: true,
            data: analysis
        });

    } catch (error) {
        console.error('Error in /insights/analyze:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message || 'Failed to analyze data'
        });
    }
});

module.exports=router