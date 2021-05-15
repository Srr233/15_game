const getOneWay = (arr, point, options) => {
  const { side } = options;
  const { up } = options;

  if (up === 'down') {
    if (side === 'right') {
      return {
        u1() {
          return { n: [arr, point], to: [arr + 1, point] };
        },
        u2() {
          return { n: [arr, point + 1], to: [arr + 1, point + 1] };
        },
        u3() {
          return { n: [arr, point + 2], to: [arr + 1, point + 2] };
        },

        su1() {
          return { n: [arr, point], to: [arr, point + 1] };
        },
        su2() {
          return { n: [arr, point + 1], to: [arr, point + 2] };
        },
        sd1() {
          return { n: [arr + 1, point], to: [arr + 1, point + 1] };
        },
        sd2() {
          return { n: [arr + 1, point + 1], to: [arr + 1, point + 2] };
        }
      }
    }
    return {
      u3() {
        return { n: [arr, point], to: [arr + 1, point] };
      },
      u2() {
        return { n: [arr, point - 1], to: [arr + 1, point - 1] };
      },
      u1() {
        return { n: [arr, point - 2], to: [arr + 1, point - 2] };
      },

      su2() {
        return { n: [arr, point], to: [arr, point - 1] };
      },
      su1() {
        return { n: [arr, point - 1], to: [arr, point - 2] };
      },
      sd2() {
        return { n: [arr + 1, point], to: [arr + 1, point - 1] };
      },
      sd1() {
        return { n: [arr + 1, point - 1], to: [arr + 1, point - 2] };
      }
    }
  } else {
    if (side === 'right') {
      return {
        u1() {
          return { n: [arr, point], to: [arr - 1, point] };
        },
        u2() {
          return { n: [arr, point + 1], to: [arr - 1, point + 1] };
        },
        u3() {
          return { n: [arr, point + 2], to: [arr - 1, point + 2] };
        },

        su1() {
          return { n: [arr, point], to: [arr, point + 1] };
        },
        su2() {
          return { n: [arr, point + 1], to: [arr, point + 2] };
        },
        sd1() {
          return { n: [arr - 1, point], to: [arr - 1, point + 1] };
        },
        sd2() {
          return { n: [arr - 1, point + 1], to: [arr - 1, point + 2] };
        }
      }
    } else {
      return {
        u3() {
          return { n: [arr, point], to: [arr - 1, point] };
        },
        u2() {
          return { n: [arr, point - 1], to: [arr - 1, point - 1] };
        },
        u1() {
          return { n: [arr, point - 2], to: [arr - 1, point - 2] };
        },

        su2() {
          return { n: [arr, point], to: [arr, point - 1] };
        },
        su1() {
          return { n: [arr, point - 1], to: [arr, point - 2] };
        },
        sd2() {
          return { n: [arr - 1, point], to: [arr - 1, point - 1] };
        },
        sd1() {
          return { n: [arr - 1, point - 1], to: [arr - 1, point - 2] };
        }
      }
    }
  }
}

export { getOneWay };