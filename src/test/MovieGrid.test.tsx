import { render, screen} from "@testing-library/react"
import MovieGrid from "../components/MovieGrid/MovieGrid";
import ApiClient from "../../services/api-client";

describe ('Movie Grid Component', () => {
  const movies = [ 
    {
        id:1,
        title:"WONKA",
        poster_path:"./",
        vote_average:7,
        overview: 'sdsadsadas',
        release_date:"1/7/2024",
        genres:"action",
    },
    {
        id:2,
        title:"AQUAMAN AND THE LOST KINGDOM",
        poster_path:"./",
        vote_average:7,
        overview: 'sdsadsadas',
        release_date:"1/7/2024",
        genres:"action",
        },
    {
        id:3,
        title:"THE BEEKEEPER",
        poster_path:"./",
        vote_average:9,
        overview: 'sdsadsadas',
        release_date:"1/7/2024",
        genres:"action",
    },
    {
        id:4,
        title:"MIGRATION",
        poster_path:"./",
        vote_average:8,
        overview: 'sdsadsadas',
        release_date:"1/7/2024",
        genres:"action",
    },  
  ]
  
  test('Movie Grid renders movies ', () => {
    const api = new ApiClient();
    const setPageMock = vi.fn();
    render(<MovieGrid movies={movies} apiClient={api} isLoading={false} isError={false} hasNextPage={true} error={{message:"no error"}} setPage={setPageMock}/>);
    expect(screen.getAllByTestId('movie-grid').length).toBe(1);
    expect(screen.getAllByTestId('movie').length).toBe(4);
  });


});