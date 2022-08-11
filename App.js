// import { StatusBar } from 'expo-status-bar';
// import { useEffect, useState } from 'react';
// import { Button, StyleSheet, Text, View } from 'react-native';

// export default function App() {


//     const [count1, setCount1] = useState(0)
//     const [count2, setCount2] = useState(0)

//     useEffect(()=>{
//         console.log("Call",count1)
//     },[count1])

//     const ClickMe1 = () => {
//         if(count1 < 5) {
//             setCount1(count1+1)
//         }
//     }

//     const ClickMe2 = () => {
//         setCount2(count2+1)
//     }

//     return (
//         <View style={{marginTop: 60}}>
//             {console.log("Hello")}
//             <Text>{count1}</Text>
//             <Button title='Click Me 1' onPress={()=>ClickMe1()}/>
//             <Text>{count2}</Text>
//             <Button title='Click Me 2' onPress={()=>ClickMe2()}/>
//         </View>
//     );
// }

import { View, Text } from 'react-native'
import React from 'react'
import moment from 'moment'

const App = () => {


    // const d = new Date().toDateString()
    //const d2 = new Date("12/01/2022").toDateString()

    // const d3 = new Date("October 13, 2014 11:13:00").toDateString()


    // const d = new Date().getTime()
    // const d2 = new Date(d)
    // const d3 = new Date()
    // d3.setDate(d2.getMonth() + 31)

    // let d1 = moment().utcOffset('+06:00').format('MM-DD-YYYY hh:mm a');

    // //let d2 = moment().utcOffset('+06:00').format('MM');    

    // let d3 = moment("0615202312:30pm", "MM-DD-YYYY hh:mm a").format('MM-DD-YYYY hh:mm a')

    // //let d4 = moment("0615202312:30pm", "MM-DD-YYYY hh:mm a").format('MM')

    // let cn=100;
    // while(moment(d1,"MM-DD-YYYY hh:mm a").isBefore(moment(d3,"MM-DD-YYYY hh:mm a"))) {

    //     console.log(d1)
    //     d1 = moment(d1,  "MM-DD-YYYY hh:mm a").add(1,'month').format('MM-DD-YYYY hh:mm a')
    //     cn--;
    // }


    let d1 = moment().utcOffset('+06:00').format('MM-YYYY')
    
    let d2 = moment('072023','MM-YYYY').format('MM-YYYY')

    while(moment(d1,'MM-YYYY').isBefore(moment(d2,'MM-YYYY'))) {

        console.log(d1)
        d1 = moment(d1, 'MM-YYYY').add(1, 'month').format('MM-YYYY')


    }

    // let d3 = moment().utcOffset('+06:00').format('MM-YYYY');
    // console.log(d3)

    //const d = moment(new Date(), "MM-DD-YYYY hh:mm a").add(50, 'month').format('MM-DD-YYYY hh:mm a')


    return (
        <View style={{marginTop: 100}}>
            
        </View>
    )
}

export default App
