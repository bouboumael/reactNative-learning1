import React from "react";
import {StyleSheet, View} from 'react-native';
import {theme, Card} from 'galio-framework';

export default function CardTest() {
    return (
        <View style={styles.card}>
            <Card
                flex
                borderless
                style={styles.card}
                title="Maël Chariault"
                caption="In infinite"
                location="In the Matrix, Computer"
                avatar="https://media-exp1.licdn.com/dms/image/D5635AQHWER4YttvKdg/profile-framedphoto-shrink_200_200/0/1621346390927?e=1641297600&v=beta&t=wXlc7W6rUr-FvP0z7hWtWCHvVHSVjFkuhdByqLVQV54"
                imageStyle={styles.cardImageRadius}
                imageBlockStyle={{padding: theme.SIZES.BASE / 2}}
                image="https://dailygeekshow.com/wp-content/uploads/2020/01/une-matrix-recette-1024x576.jpg"/>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
    }
});
