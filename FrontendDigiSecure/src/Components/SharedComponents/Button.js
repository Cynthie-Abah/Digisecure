import { View, StyleSheet, Button } from 'react-native'

export function LButton({children, onClick}) {
  return (
    <View>
      {/* pressable */}
        <Button title={children} style={styles.Button} onPress={onClick}/>
    </View>
  )
}

const styles = StyleSheet.create({
    Button: {
      display: 'block',
    backgroundColor: '#E1E6E3',
    color: 'red'
    },
});
