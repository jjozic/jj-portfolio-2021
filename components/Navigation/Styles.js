import styled from 'styled-components';

export const NavElement = styled.nav`
    position: sticky;
    top: 0;
    width: 100%;
    background-color: var(--light);
    padding: 0 2rem;
`;

export const Wrapper = styled.div`
    height: 75px;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--dark);
    font-weight: 700;
`;