import { useState } from "react"
import { words } from "./App"

function Router () {
    const [subcribers, setSubscribers] = useState([
        {
            name: "Mike",
            monthlyPayment: 0.5
        },
        {
            name: "Sarah",
            monthlyPayment: 0.5
        }
    ])

    const [definitions, setDefinitions] = useState(words)
    const [bountyCap, setBountyCap] = useState(0)

    // server-like cron job
    // for each defn
    const payout = () => {
        let sum = 0
        let currentSubs = 0
        for (let i = 0; i < definitions.length; i++) {
            sum += definitions[i].name
        }

        for (let i = 0; i < subcribers.length; i++) {
            currentSubs += subcribers[i].monthlyPayment
        }

        if (sum > currentSubs) {
            return "Not enough ETH in escrow"
        } else {

        }
    }

    const routeEthToAddress = (address) => {
        
    }



}

export default Router