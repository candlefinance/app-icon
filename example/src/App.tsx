import * as React from 'react';

import { getIconName, setIconName } from '@candlefinance/app-icon';
import { Image, Pressable, StyleSheet, View } from 'react-native';

export default function App() {
  const [icon, setIcon] = React.useState<
    'default' | 'AppIcon-2' | 'AppIcon-3'
  >();

  React.useEffect(() => {
    getIconName()
      .then((name) => {
        setIcon(name as any);
      })
      .catch(console.error);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Pressable
          style={{ borderWidth: icon === 'default' ? 4 : 0, borderRadius: 15 }}
          onPress={() =>
            setIconName()
              .then((name) => {
                setIcon(name as any);
              })
              .catch(console.error)
          }
        >
          <Image
            style={styles.box}
            source={require(`../AppIcons/Icon-1.png`)}
          />
        </Pressable>
        <Pressable
          style={{
            borderWidth: icon === 'AppIcon-2' ? 4 : 0,
            borderRadius: 15,
          }}
          onPress={() =>
            setIconName('AppIcon-2')
              .then((name) => {
                setIcon(name as any);
              })
              .catch(console.error)
          }
        >
          <Image
            style={styles.box}
            source={require(`../AppIcons/Icon-2.png`)}
          />
        </Pressable>
        <Pressable
          style={{
            borderWidth: icon === 'AppIcon-3' ? 4 : 0,
            borderRadius: 15,
          }}
          onPress={() =>
            setIconName('AppIcon-3')
              .then((name) => {
                setIcon(name as any);
              })
              .catch(console.error)
          }
        >
          <Image
            style={styles.box}
            source={require(`../AppIcons/Icon-3.png`)}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  },
});
