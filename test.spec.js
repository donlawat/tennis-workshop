function TennisGame() {
    this.reset = () =>{
    
    }
    this.eco = () =>{
    return 'Love - Love'
    }
    }
    
    
    test ('Echo " Love - Love "when game start', () =>{
      // Arrange
      let app = new TennisGame()
      app.reset()
    
      // Act
      let result =app.eco()
    
      //Assert
      expect(result).toBe('Love - Love' )
    
    })