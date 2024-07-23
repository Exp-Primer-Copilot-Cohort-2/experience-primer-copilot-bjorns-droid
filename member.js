function skillMember() {
  var member = {
    name: 'John',
    age: 22,
    skill: ['JavaScript', 'React', 'NodeJS'],
    // Method
    showSkill: function() {
      this.skill.forEach(function(skill) {
        console.log(`${this.name} knows ${skill}`);
      });
    }
  };
  member.showSkill();
}