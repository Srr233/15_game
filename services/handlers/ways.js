function rotateFromDown(chosenPos, spacePos) {
  switch (chosenPos[1]) {
    case 0:
      return [
        { n: [3, 1], to: [2, 1] },

        { n: [3, 0], to: [3, 1] },

        { n: [2, 0], to: [3, 0] },

        { n: [2, 1], to: [2, 0] },

        { n: [3, 1], to: [2, 1] },

        { n: [3, 0], to: [3, 1] }
      ];
    case 3:
      return [
        { n: [2, 3], to: [2, 2] },

        { n: [2, 3], to: [3, 3] },

        { n: [3, 2], to: [3, 3] },

        { n: [3, 3], to: [3, 2] },

        { n: [3, 2], to: [2, 2] },

        { n: [2, 3], to: [2, 2] },
      ];
    default:
      switch(chosenPos[1]) {
        case 1:
          if (spacePos[1] > chosenPos[1]) {
            return [
              { n: [3, 2], to: [2, 2] },

              { n: [3, 1], to: [3, 2] },

              { n: [2, 1], to: [3, 1] },

              { n: [2, 2], to: [2, 1] },

              { n: [3, 2], to: [2, 2] },

              { n: [3, 2], to: [3, 1] }
            ];
          } else {
            return [
              { n: [3, 0], to: [2, 0] },

              { n: [3, 1], to: [3, 0] },

              { n: [2, 1], to: [3, 1] },

              { n: [2, 0], to: [2, 1] },

              { n: [3, 0], to: [2, 0] },

              { n: [3, 1], to: [3, 0] }
            ];
          }
        case 2:
          if (spacePos[1] > chosenPos[1]) {
            return [
              { n: [3, 3], to: [2, 3] },

              { n: [3, 2], to: [3, 3] },

              { n: [2, 2], to: [3, 2] },

              { n: [2, 3], to: [2, 2] },

              { n: [3, 3], to: [2, 3] },

              { n: [3, 2], to: [3, 3] }
            ];
          } else {
            return [
              { n: [3, 1], to: [2, 1] },

              { n: [3, 2], to: [3, 1] },

              { n: [2, 2], to: [3, 2] },

              { n: [2, 2], to: [2, 1] },

              { n: [3, 1], to: [2, 1] },

              { n: [3, 2], to: [3, 1] }
            ];
          }
      }
  }
}

function rotateFromUp (chosenPos, spacePos) {
  switch (chosenPos[1]) {
    case 0:
      return [
        { n: [0, 1], to: [1, 1] },

        { n: [0, 0], to: [0, 1] },

        { n: [1, 0], to: [0, 0] },

        { n: [1, 1], to: [1, 0] },

        { n: [0, 1], to: [1, 1] },

        { n: [0, 0], to: [0, 1] }
      ];
    case 3:
      return [
        { n: [1, 3], to: [1, 2] },

        { n: [1, 3], to: [0, 3] },

        { n: [0, 2], to: [0, 3] },

        { n: [0, 3], to: [0, 2] },

        { n: [0, 2], to: [1, 2] },

        { n: [1, 3], to: [1, 2] },
      ];
    default:
      switch (chosenPos[1]) {
        case 1:
          if (spacePos[1] > chosenPos[1]) {
            return [
              { n: [0, 2], to: [1, 2] },

              { n: [0, 1], to: [0, 2] },

              { n: [1, 1], to: [0, 1] },

              { n: [1, 2], to: [1, 1] },

              { n: [0, 2], to: [1, 2] },

              { n: [0, 2], to: [0, 1] }
            ];
          } else {
            return [
              { n: [0, 0], to: [1, 0] },

              { n: [0, 1], to: [0, 0] },

              { n: [1, 1], to: [0, 1] },

              { n: [1, 0], to: [1, 1] },

              { n: [0, 0], to: [1, 0] },

              { n: [0, 1], to: [0, 0] }
            ];
          }
        case 2:
          if (spacePos[1] > chosenPos[1]) {
            return [
              { n: [0, 3], to: [1, 3] },

              { n: [0, 2], to: [0, 3] },

              { n: [1, 2], to: [0, 2] },

              { n: [1, 3], to: [1, 2] },

              { n: [0, 3], to: [1, 3] },

              { n: [0, 2], to: [0, 3] }
            ];
          } else {
            return [
              { n: [0, 1], to: [1, 1] },

              { n: [0, 2], to: [0, 1] },

              { n: [1, 2], to: [0, 2] },

              { n: [1, 2], to: [1, 1] },

              { n: [0, 1], to: [1, 1] },

              { n: [0, 2], to: [0, 1] }
            ];
          }
      }
  }
}

function rotateFromMiddle (chosenPos, spacePos) {
  const rotateFromCenter = () => {

  }
  const rotateFromSides = () => {
    switch(chosenPos[0]) {
      case 1:
        switch(chosenPos[1]) {
          case 0:
            if (chosenPos[0] > spacePos[0]) {
              return [
                { n: [1, 1], to: [0, 1] },
  
                { n: [1, 0], to: [1, 1] },
  
                { n: [0, 0], to: [1, 0] },
  
                { n: [0, 1], to: [0, 0] },
                
                { n: [1, 1], to: [0, 1] },

                { n: [1, 0], to: [1, 1] }
              ];
            } else {
              return [
                { n: [2, 0], to: [2, 1] },

                { n: [1, 0], to: [2, 0] },

                { n: [1, 1], to: [1, 0] },

                { n: [2, 1], to: [1, 1] },

                { n: [2, 0], to: [2, 1] },

                { n: [1, 0], to: [2, 0] }
              ];
            }
          case 3:
            if (chosenPos[0] > spacePos[0]) {
              return [
                { n: [1, 2], to: [0, 2] },

                { n: [1, 3], to: [1, 2] },

                { n: [0, 3], to: [1, 3] },

                { n: [0, 2], to: [0, 3] },

                { n: [1, 2], to: [0, 2] },

                { n: [1, 3], to: [1, 2] }
              ];
            } else {
              return [
                { n: [1, 2], to: [2, 2] },

                { n: [1, 3], to: [1, 2] },

                { n: [2, 3], to: [1, 3] },

                { n: [2, 2], to: [2, 3] },

                { n: [1, 2], to: [2, 2] },

                { n: [1, 3], to: [1, 2] }
              ];
            }
          default:
            rotateFromCenter()
        }
      case 2:
        switch (chosenPos[1]) {
          case 0:
            if (chosenPos[0] > spacePos[0]) {
              return [
                { n: [1, 0], to: [1, 1] },

                { n: [2, 0], to: [1, 0] },

                { n: [2, 1], to: [2, 0] },

                { n: [1, 1], to: [2, 1] },

                { n: [1, 0], to: [1, 1] },

                { n: [2, 0], to: [1, 0] }
              ];
            } else {
              return [
                { n: [2, 0], to: [2, 1] },

                { n: [3, 0], to: [2, 0] },

                { n: [3, 1], to: [3, 0] },

                { n: [2, 1], to: [3, 1] },

                { n: [2, 0], to: [2, 1] },

                { n: [3, 0], to: [2, 0] }
              ];
            }
          case 3:
            if (chosenPos[0] > spacePos[0]) {
              return [
                { n: [2, 2], to: [1, 2] },

                { n: [1, 3], to: [1, 2] },

                { n: [2, 3], to: [1, 3] },

                { n: [2, 2], to: [2, 3] },

                { n: [1, 2], to: [2, 2] },

                { n: [1, 3], to: [1, 2] }
              ];
            } else {
              return [
                { n: [2, 2], to: [3, 2] },

                { n: [2, 3], to: [2, 2] },

                { n: [3, 3], to: [2, 3] },

                { n: [3, 2], to: [3, 3] },

                { n: [2, 2], to: [3, 2] },

                { n: [2, 3], to: [2, 2] }
              ];
            }
          default:
            rotateFromCenter()
        }
    }
  }
  if (chosenPos[1] === 0 || chosenPos[1] === 3) {
    return rotateFromSides();
  }
}
export { rotateFromDown, rotateFromUp, rotateFromMiddle }