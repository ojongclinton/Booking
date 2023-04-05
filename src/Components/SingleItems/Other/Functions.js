export const deepSearchReplace = (target,keySearched,replaceValue) => {
    if (typeof target === 'object') {
        for (let key in target) {
          if(Array.isArray(target[key]) && key ===keySearched){
              target[key] = replaceValue
          }
            else if (typeof target[key] === 'object') {
              deepSearchReplace(target[key],keySearched,replaceValue);
            } else {
                if (key === keySearched) {
                    target[key] = replaceValue
                }
  
            }
        }
    }
    return target
  }
  
export const deleteEmptyKeys = (target)=>{
    if (typeof target === 'object') {
      for (let key in target) {
        if(Array.isArray(target[key]) && target[key].length == 0){
            delete target[key]
        }
        else if(Array.isArray(target[key]) && target[key].length > 0){
          deepSearchReplace(target[key]);
        }
          else if (typeof target[key] === 'object') {
            if(Object.entries(target[key]).length == 0 ){
              delete target[key]
            }
            else{
              deepSearchReplace(target[key]);
            }
          }
      }
  }
  return target
  }

