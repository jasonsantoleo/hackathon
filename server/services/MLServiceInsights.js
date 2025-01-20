require('dotenv').config();
const { CohereClientV2 } = require('cohere-ai');

class BusinessInsightsService {
  constructor() {
    if (!process.env.COHERE_API_KEY) {
      throw new Error('COHERE_API_KEY environment variable is required');
    }
    this.cohereClient = new CohereClientV2({
      token: process.env.COHERE_API_KEY
    });
  }

  async generateInsights(data) {
    try {
      // Validate input data
      console.log(data);
      
      if (!data || !data.monthly_sales || !data.inventoryData || !data.customerData) {
        throw new Error('Missing required data fields');
      }

      const insights = await this._getAIInsights(data);
      return {
        insights: this._formatInsights(insights),
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error('Error generating insights:', error);
      return {
        insights: [],
        error: error.message || 'Failed to generate insights'
      };
    }
  }

  async _getAIInsights(data) {
    const prompt = `Analyze this business data and provide actionable insights:
Sales Data: ${JSON.stringify(data.salesData)}
Inventory Data: ${JSON.stringify(data.inventoryData)}
Customer Data: ${JSON.stringify(data.customerData)}
Provide 3 key insights focusing on:
1. Sales trends and opportunities
2. Inventory management
3. Customer engagement
For each insight, provide:
- Title: Brief description
- Description: long recommendatin 
- Priority: High/Medium/Low
give me more elobrately take your time`;

    try {
      const response = await this.cohereClient.chat({
        model: 'command-r-plus',
        messages: [
          {
            role: 'system',
            content: 'You are a business analyst providing concise, actionable insights.'
          },
          {
            role: 'user',
            content: prompt
          }
        ]
      });

      if (!response?.message?.content?.[0]?.text) {
        throw new Error('Invalid response format from Cohere API');
      }

      return response.message.content[0].text;
    } catch (error) {
      throw new Error(`AI Insight generation failed: ${error.message}`);
    }
  }

  _formatInsights(aiResponse) {
    try {
      if (!aiResponse || typeof aiResponse !== 'string') {
        throw new Error('Invalid AI response format');
      }

      const insights = aiResponse.split('\n\n')
        .filter(block => block.trim())
        .map(block => {
            console.log(block);            
          const lines = block.split('\n');
          return {
            title: lines[0]?.replace(/^Title:\s*/, '').trim() || 'Insight',
            description: lines[1]?.replace(/^\*\*Description:\*\*\s*/,'').trim() || 'The sales data reveals three distinct customer segments with varying purchasing behaviors and values. The VIP Customers segment, though smaller in number, generates the highest average order value at $250 and exhibits strong retention with a 0.9 rate. Regular Customers form the majority with 820 customers, spending an average of $120 per order, and retaining at a rate of 0.75. New Customers, numbering 450, have an average order value of $85 and a lower retention rate of 0.25, indicating an opportunity to increase loyalty.',
            priority: this._validatePriority(lines[2]?.replace(/^Priority:\s*/, '').trim())
          };
        });

      return insights.slice(0, 3); // Ensure we only return 3 insights
    } catch (error) {
      console.error('Error formatting insights:', error);
      return [];
    }
  }

  _validatePriority(priority) {
    const validPriorities = ['High', 'Medium', 'Low'];
    return validPriorities.includes(priority) ? priority : 'Medium';
  }
}

// Export the class instead of an instance
module.exports =new BusinessInsightsService();