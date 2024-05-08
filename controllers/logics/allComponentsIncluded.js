export default function allComponentsIncluded(components) {
    if (components.length != 5) {
      return false;
    }
    const partBasket = [false, false, false, false, false];
    components.forEach((element) => {
      let index = element.charCodeAt(0) - "A".charCodeAt(0);
      //checking validity of index
      if(index<0 || index>11)
      {
          return false;
      }
      if (index >= 0 && index <= 2) {
        partBasket[0] = true;
      } else if (index >= 0 && index <= 2) {
        partBasket[0] = true;
      } else if (index >= 3 && index <= 4) {
        partBasket[1] = true;
      } else if (index >= 5 && index <= 6) {
        partBasket[2] = true;
      } else if (index >= 7 && index <= 8) {
        partBasket[3] = true;
      } else if (index >= 9 && index <= 11) {
        partBasket[4] = true;
      }
    });
    for (let index = 0; index < partBasket.length; index++) {
      if (!partBasket[index]) {
        return false;
      }
    }
    return true;
  }