

const NewsItem = (props)=> {
    let {title,description,imgUrl,newsUrl,author,date,source} = props;
    return (
      <div className='my-3'>
            <div className="card" >
            <div style={ {display:'flex',justifyContent:'flex-end',position:'absolute',right:0}}>
            <span class="badge rounded-pill bg-danger" >{source}</span>
            </div>
            
            <img style={{height:'300px'}} src={imgUrl} className="card-img-top"  alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
            <a  href={newsUrl} target='_blank' className="btn btn-sm btn-dark " rel="noreferrer">Read More</a>
            </div>
            </div>
      </div>
    )
  }


export default NewsItem
