import React, { MouseEvent, ChangeEvent, useCallback } from 'react'
import { useState } from 'react'
import {
    NavHeader,
    Title,
    NavWrapper,
    NavLinks,
    Link,
    SearchButton,
    SearchBox,
    SearchInput,
    SearchIcon,
} from './NavStyle'
import searchIcon from '../../assets/search-icon.svg';
import clearIcon from '../../assets/clear-icon.svg';
import ApiClient from '../../../services/api-client';
import { debounce } from 'lodash';
import { MovieType } from '../../types';


type NavigationProps = {
    setMovies: React.Dispatch<React.SetStateAction<Array<MovieType>>>;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    setMovieListCategory: React.Dispatch<React.SetStateAction<string>>;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    page: number;
    apiClient: ApiClient;
}

const Navigation = ({ setMovies, setPage, setMovieListCategory, setSearchQuery }: NavigationProps) => {
    const [isTyping, setIsTyping] = useState(false);
    const [userInput, setUserInput] = useState("");


    const handleOnInputChange = useCallback(debounce(async (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        setMovies([]);
        setPage(1);
    }, 600), []);

    const handleClearClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setUserInput("");
        setIsTyping(false);
    }

    const handleOnInputBlur = (event: ChangeEvent<HTMLInputElement>) => {
        setIsTyping(event.target.value !== "");
    }

    const handleOnNavLinkClick = (movieListCategory: string) => {
        window.scrollTo(0, 0);
        setMovieListCategory(movieListCategory);
        setSearchQuery("")
        setPage(1);
    }


    return (<>
        <NavWrapper id='nav'>
            <NavHeader>
                <Title data-testid='title'>Flixster</Title>
                <NavLinks>
                    <Link
                        data-testid="nav-link"
                        onClick={() => handleOnNavLinkClick('now_playing')}>Home</Link>
                    <Link
                        data-testid="nav-link"
                        onClick={() => handleOnNavLinkClick('popular')}>Popular</Link>
                    <Link
                        data-testid="nav-link"
                        onClick={() => handleOnNavLinkClick('top_rated')}>Top Rated</Link>
                    <Link
                        data-testid="nav-link"
                        onClick={() => handleOnNavLinkClick('upcoming')}>Upcoming</Link>
                </NavLinks>
                <SearchBox>
                    <SearchButton
                        data-testid="search-button"
                        onClick={handleClearClick}>
                        <SearchIcon
                            data-testid="search-icon"
                            src={isTyping ? clearIcon : searchIcon}
                            alt={isTyping ? 'clear button icon' : 'search button icon'} />
                    </SearchButton>
                    <SearchInput
                        data-testid="search-input"
                        onChange={(e) => {
                            handleOnInputChange(e);
                            setUserInput(e.target.value);
                            setIsTyping(e.target.value !== "");
                        }}
                        value={userInput}
                        onBlur={handleOnInputBlur}
                        type="text" />
                </SearchBox>
            </NavHeader>
        </NavWrapper>
    </>)
}


export default Navigation;