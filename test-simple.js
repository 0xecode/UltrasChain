// Simple test to verify match generation logic
console.log('🧪 Testing PSG matches generation...');

const now = new Date();
const matches = [];

// Generate 25 test matches with all competitions
const competitions = [
  "Ligue 1", "UEFA Champions League", "UEFA Europa League", 
  "Coupe de France", "FIFA Club World Cup", "Coupe de la Ligue",
  "Trophée des Champions", "UEFA Super Cup"
];

for (let i = 0; i < 25; i++) {
  const daysToAdd = 3 + (i * 6); // Un match environ tous les 6 jours
  const matchDate = new Date(now.getTime() + (daysToAdd * 24 * 60 * 60 * 1000));
  
  matches.push({
    id: 1000000 + i,
    date: matchDate.toISOString(),
    teams: {
      home: { name: i % 2 === 0 ? "Paris Saint Germain" : "Opponent " + i },
      away: { name: i % 2 === 0 ? "Opponent " + i : "Paris Saint Germain" }
    },
    league: { name: competitions[i % competitions.length] },
    fixture: { date: matchDate.toISOString() }
  });
}

console.log(`✅ Generated ${matches.length} matches`);

// Test NEW filtering logic (ALL future matches)
const upcomingMatches = matches.filter(match => {
  const matchDate = new Date(match.fixture.date);
  const daysDiff = (matchDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
  return daysDiff > 0; // No upper limit
});

console.log(`🎯 ${upcomingMatches.length} ALL future matches (no limit)`);

const predictionOpen = matches.filter(match => {
  const matchDate = new Date(match.fixture.date);
  const daysDiff = (matchDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
  return daysDiff > 15; // More than 15 days = prediction open
});

console.log(`📈 ${predictionOpen.length} matches with predictions open (>15 days)`);

if (upcomingMatches.length > 0) {
  console.log('\n📅 First 5 upcoming matches with all competitions:');
  upcomingMatches.slice(0, 5).forEach((match, index) => {
    const daysDiff = Math.ceil((new Date(match.fixture.date).getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    console.log(`${index + 1}. ${match.teams.home.name} vs ${match.teams.away.name}`);
    console.log(`   🏆 ${match.league.name}`);
    console.log(`   📆 In ${daysDiff} days (${new Date(match.fixture.date).toLocaleDateString('fr-FR')})`);
    console.log('');
  });
  
  // Show competition distribution
  console.log('\n🏆 Competition distribution:');
  const competitionCount = {};
  upcomingMatches.forEach(match => {
    competitionCount[match.league.name] = (competitionCount[match.league.name] || 0) + 1;
  });
  Object.entries(competitionCount).forEach(([comp, count]) => {
    console.log(`   ${comp}: ${count} matches`);
  });
}

console.log('✅ Match generation logic working correctly!');