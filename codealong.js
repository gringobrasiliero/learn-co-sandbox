    function Sandwich (bread, ingredients, cut) {
      this.bread = bread;
      this.ingredients = ingredients;
      this.cut = cut;
    }
     
    const blt = new Sandwich('White', ['Bacon', 'Lettuce', 'Tomato', 'Mayo'], 'Rectangle');
    const reuben = new Sandwich('Rye', ['Corned Beef', 'Sauerkraut', 'Swiss', 'Russian dressing'], 'Diagonal');
    
        const pbj = {
      name: 'PB&J',
      bread: 'White',
      ingredients: ['Peanut Butter', 'Jelly'],
      cut: 'Triangles',
      serve: function () {
        console.log(`Here's your ${this.name}. Enjoy!`);
      }
    };
    