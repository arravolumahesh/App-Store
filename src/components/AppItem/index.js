import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appId, appName, imageUrl, category} = appDetails
}
return (
  <>
    <li className="app-container">
      <img className="app-image" src={imageUrl} alt={`app-item${appId}`} />
      <div className="app-details-container">
        <h1 className="heading">{appName}</h1>
        <p className="description">{category}</p>
      </div>
    </li>
  </>
)

export default AppItem
