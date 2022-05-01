
const PosteoCard = ( props ) => {

const {title, fotografa, year, img} = props.posteo

  return (
    <div class="card carousel-center mx-6 mt-6 rounded-box">
  <figure><img src= {img} alt="Album"/></figure>
  <div class="card-body">
    <h2 class="card-title"> <strong> {title} </strong> </h2>
    <strong> {fotografa} </strong>
     <div> {year} </div>
    <div class="card-actions justify-end">
      <button class="btn btn-dark">Ver</button>
    </div>
  </div>
</div>

  )
}

export default PosteoCard

