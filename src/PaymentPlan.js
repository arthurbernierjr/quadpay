export default function PaymentPlan({payments}){
 return(
    <ul className="payments-wrapper">
        {
            payments.map((item => {
                const {date, name, payment} = item
                return (
                <li key={date} className="payment-card">
                    <div>
                        <h3 className="payment-title">
                            {date}
                        </h3>
                        <p className="payment-subtitle">
                            {name}
                        </p>
                    </div>
                    <div>
                        <h3 className="payment-amount">
                            {payment}
                        </h3>
                    </div>
                </li>
                )
            }))
        }
    </ul>
 )
} 