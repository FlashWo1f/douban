import React from "react";
import { Card, Tag } from 'antd';
import { getHotShowing, getNew } from "../api";
import { Link } from 'react-router-dom';


function CardComp(props: any) {
  let { isLoading, data } = props;

  if (isLoading) {
    return (
      <Card
        loading={true}
        className="new_movie-card"
        hoverable
        cover={
          <div className="loading-img-box">
            <img src="http://118.24.21.99:5000/static/media/loading.130d74ed.svg" alt="" />
          </div>
        }
      />
    );
  }

  return (
    <Card
      className="new_movie-card"
      hoverable
      cover={
        <Link to={`/detail/${data.id}`}>
          <img src={data.images.small} alt="" />
        </Link>
      }
    >
      <Tag color="#f50" className="img-tag">{data.rating.average}</Tag>
      <Card.Meta
        title={data.title}
        description={data.genres.join("/")}
      />
    </Card>
  );
}

class Home extends React.Component {
  constructor(props: any) {
    super(props);
    let mockData = new Array(6).fill(1);
    this.state = {
      hotShowList: mockData,
      newMovieList: mockData,
      isLoadingHotShow: true,
      isLoadingNewMovie: true,
    };
    console.log("2cici")

  }
  componentDidMount() {
    getHotShowing({
      start: 0,
      count: 12,
    })
      .then(({ data }) => {
        let { subjects } = data;

        this.setState({
          hotShowList: subjects,
          isLoadingHotShow: false,
        });
      });

    getNew()
      .then(({ data }) => {
        let { subjects } = data;

        this.setState({
          newMovieList: subjects,
          isLoadingNewMovie: false,
        });
      });
  }
  render() {
    let {
      hotShowList,
      newMovieList,
      isLoadingHotShow,
      isLoadingNewMovie
    } = (this.state as any);
    return (
      <div className="page page-home">
        <div className="block clearfix">
          <div className="line-raw">
            <h2 className="raw-title">正在热映</h2>
          </div>
          {hotShowList.map((item: any, index: number) => {
            return (
              <CardComp
                key={index}
                data={item}
                isLoading={isLoadingHotShow}
              />
            );
          })}
        </div>
        <div className="block clearfix">
          <div className="line-raw">
            <h2 className="raw-title">新片榜</h2>
          </div>
          {newMovieList.map((item: any, index: number) => {
            return (
              <CardComp
                key={index}
                data={item}
                isLoading={isLoadingNewMovie}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;