import React,{Component} from "react";
import axios from "axios";

class Character extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:null,
      page: this.props.page
    }
    this.componentDidMount = this.componentDidMount.bind(this);

  }

  componentDidMount(){
      this.getData(this.props.page)
  }

  componentDidUpdate(prevProps,prevState, snapshot){
      if(prevProps.page != this.props.page){
        this.getData(this.props.page)
      }
  }

  getData(page){
    axios.get(`https://swapi.co/api/people/?&page=${page}&format=json`)
      .then( response => {
        this.setState({data:response.data.results})
        }
      )
  }

  render(){
    const data = this.state.data;
    let template;
    return template = data ? (
      data.map((item,index) =>{
        return (<div key={index}>
          <h2>{item.name}</h2>
          <ul>
            <li>{item.gender}</li>
            <li>{item.height}</li>
            <li>{item.gender}</li>

          </ul>
        </div>)
      })
    ) : (<div>Swapi</div>)
  
  }
}
export default Character