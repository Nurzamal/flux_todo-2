import React from 'react'

export function Footer(props) {
    return (
        <div>
            <footer id="footer">
                <div>
                    <button id="btn-all" onClick={() => props.onGetTodos()}>
                        Get todos from API
                    </button>

                </div>
                <div id="items">
                </div>
            </footer>
        </div>
    );
}

export default Footer;