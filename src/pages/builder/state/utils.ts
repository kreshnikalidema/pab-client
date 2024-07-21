const propertyMappings: { [key: string]: string } = {
  AccessibleLabel: 'aria-label',
  BorderColor: 'borderColor',
  BorderStyle: 'borderStyle',
  BorderThickness: 'borderWidth',
  Color: 'color',
  DisplayMode: 'display',
  DisabledBorderColor: 'borderColor',
  Fill: 'backgroundColor',
  FocusedBorderColor: 'borderColor',
  Height: 'height',
  PaddingBottom: 'paddingBottom',
  PaddingLeft: 'paddingLeft',
  PaddingRight: 'paddingRight',
  PaddingTop: 'paddingTop',
  PressedBorderColor: 'borderColor',
  PressedColor: 'color',
  PressedFill: 'backgroundColor',
  Visible: 'visibility',
  Width: 'width',
  X: 'left',
  Y: 'top',
  LayoutDirection: 'flexDirection',
  LayoutJustify: 'justifyContent',
  LayoutAlignItems: 'alignItems',
  LayoutGap: 'gap',
  LayoutOverflowX: 'overflowX',
  LayoutOverflowY: 'overflowY',
  LayoutWrap: 'flexWrap',
  LayoutMinHeight: 'minHeight',
  LayoutMinWidth: 'minWidth',
  LayoutMaxHeight: 'maxHeight',
  LayoutMaxWidth: 'maxWidth',
  FillPortions: 'flex',
};

const valueMappings: { [key: string]: { [key: string]: string } } = {
  LayoutDirection: {
    Horizontal: 'row',
    Vertical: 'column',
  },
  LayoutJustify: {
    Start: 'flex-start',
    End: 'flex-end',
    Center: 'center',
    SpaceBetween: 'space-between',
    SpaceAround: 'space-around',
    SpaceEvenly: 'space-evenly',
  },
  LayoutAlignItems: {
    Start: 'flex-start',
    End: 'flex-end',
    Center: 'center',
    Stretch: 'stretch',
    Baseline: 'baseline',
  },
  LayoutWrap: {
    NoWrap: 'nowrap',
    Wrap: 'wrap',
    WrapReverse: 'wrap-reverse',
  },
  LayoutOverflow: {
    Scroll: 'scroll',
    Hide: 'hidden',
    Auto: 'auto',
    Visible: 'visible',
  },
};

export function withSet<T extends object>(store: T) {
  return Object.assign(store, {
    set<K extends keyof T>(key: K, value: T[K]) {
      (store[key] as T[K]) = value;
    },
  });
}

export function withToStyles<T extends object>(store: T) {
  return Object.assign(store, {
    toStyles() {
      const styles: { [key: string]: any } = {};
      let hasFlexProperty = false;

      for (const [key, value] of Object.entries(store)) {
        if (
          value !== undefined &&
          key !== 'Children' &&
          typeof value !== 'function'
        ) {
          const styleProperty = propertyMappings[key] || key;
          const transformedValue =
            valueMappings[key]?.[value as string] || value;
          styles[styleProperty] = transformedValue;

          // Check if the property is a flex-related property
          if (
            [
              'flexDirection',
              'justifyContent',
              'alignItems',
              'gap',
              'flex',
            ].includes(styleProperty)
          ) {
            hasFlexProperty = true;
          }
        }
      }

      if (hasFlexProperty) {
        styles.display = 'flex';
      }

      return styles;
    },
  });
}
