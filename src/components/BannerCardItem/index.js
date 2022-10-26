// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {itemDetails} = props
  const {headerText, description, className} = itemDetails
  //   console.log(headerText, description, className)

  return (
    <li className={`border ${className}`}>
      <div>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <div>
          <button type="button">show more</button>
        </div>
      </div>
    </li>
  )
}

export default BannerCardItem
