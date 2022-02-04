import React, { useRef, useEffect, EffectCallback, DependencyList,} from 'react'

//react no tiene una opción nativa para emular la función de ciclo de vida
//componentDidMount que se usaba en componentes de clases, lamentablente, 
//el useEffect no nos sirve para emular de forma correcta ese comportamiento, 
//por eso se crea este hook personalizado

function useDidUpdate (callback: EffectCallback, dependencies?: DependencyList): void {
  const hasMount = useRef(false);

  useEffect(() =>  {
    if (hasMount.current) {
      callback();
    } else {
      hasMount.current = true;
    }
  }, dependencies);
}

export default useDidUpdate;