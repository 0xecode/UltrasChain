// Test script to verify real PSG matches are generated
import { realPSGService } from './src/services/realPSGMatches.js';

async function testMatches() {
  console.log('🧪 Testing PSG matches generation...');
  
  try {
    const matches = await realPSGService.getPSGFixtures();
    
    console.log(`✅ Found ${matches.length} matches`);
    
    if (matches.length > 0) {
      console.log('\n📅 First 3 matches:');
      matches.slice(0, 3).forEach((match, index) => {
        console.log(`${index + 1}. ${match.teams.home.name} vs ${match.teams.away.name}`);
        console.log(`   📍 ${match.fixture.venue.name} - ${match.fixture.venue.city}`);
        console.log(`   🏆 ${match.league.name} (${match.league.round})`);
        console.log(`   📆 ${new Date(match.fixture.date).toLocaleDateString('fr-FR')}`);
        console.log(`   ⏰ ${new Date(match.fixture.date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}`);
        console.log('');
      });
      
      const upcomingMatches = matches.filter(match => {
        const matchDate = new Date(match.fixture.date);
        const now = new Date();
        const daysDiff = (matchDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
        return daysDiff > 0 && daysDiff <= 60;
      });
      
      console.log(`🎯 ${upcomingMatches.length} matches available for predictions (within 60 days)`);
      
      const predictionWindow = matches.filter(match => {
        const matchDate = new Date(match.fixture.date);
        const now = new Date();
        const daysDiff = (matchDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
        return daysDiff > 15; // More than 15 days = prediction open
      });
      
      console.log(`📈 ${predictionWindow.length} matches open for predictions (more than 15 days away)`);
      
    } else {
      console.log('❌ No matches found!');
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

testMatches();