import { useRef, useEffect } from 'react';

export const SECTION_LIST_MOCK_DATA = [
    {
      title: 'Appetizers',
      data: [
        {
          id: '1',
          title: 'Pasta',
          price: '10',
        },
        {
          id: '3',
          title: 'Pizza',
          price: '8',
        },
      ],
    },
    {
      title: 'Salads',
      data: [
        {
          id: '2',
          title: 'Caesar',
          price: '2',
        },
        {
          id: '4',
          title: 'Greek',
          price: '3',
        },
      ],
    },
  ];

export function getSectionListData(data) {
  const result = data.reduce((accum, current) => {
    let categoryGroup = accum.find(elem => elem.title === current.category);
    if (!categoryGroup) {
      categoryGroup = { title: current.category, data: [] }
      accum.push(categoryGroup);
    }
    categoryGroup.data.push({ id: current.id, title: current.title, price: current.price })
    return accum;
  }, []);
  return result;
}

export function useUpdateEffect(effect, dependencies = []) {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      return effect();
    }
  }, dependencies);
}
