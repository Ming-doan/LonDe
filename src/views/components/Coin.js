import { useState } from "react"

function Coin({ isplaying }) {
    const [amount, setAmount] = useState(0)

    if (isplaying) {
        setTimeout(() => {
            setAmount(amount + 0.01)
        }, 3000)
    }

    return <p>You just spend <b>{amount.toFixed(2)}</b> Coins</p>
}

export default Coin