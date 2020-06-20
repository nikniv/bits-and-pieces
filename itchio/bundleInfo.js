// Information collector for items in a purchased itch.io bundle.

/*
  NOTES:

  div game_row > a > div game_thumb
  div game_row_data
  h2 game_title
  div meta_row game_short_text
  div meta_row game_author
  div meta_row > span icon icon-windows8 | icon-tux | icon-apple
  div pager > a next_page

  Name,Author,Description,isMac,isWin,isTux,Link,Thumb
*/

const run = () => {
  const gameRow = document.getElementsByClassName('game_row');

  [...gameRow].forEach(row => {
    const gameRowData = row.getElementsByClassName('game_row_data')[0];

    // name
    const gameTitle = gameRowData.getElementsByClassName('game_title')[0].innerText;

    // desc
    const gameShortText = gameRowData.getElementsByClassName('game_short_text')[0].innerText;
    const gameAuthor = gameRowData.getElementsByClassName('game_author')[0].innerText;

    // icons
    const isMac = !!gameRowData.getElementsByClassName('icon-apple').length;
    const isWin = !!gameRowData.getElementsByClassName('icon-windows8').length;
    const isTux = !!gameRowData.getElementsByClassName('icon-tux').length;

    // game homepage
    const gameLink = row.getElementsByTagName('a')[0].getAttribute('href');

    // game image
    const gameThumb = row.getElementsByClassName('game_thumb')[0].getAttribute('data-background_image');
    
    // TODO: add to library
    // const gameLibLink = button;

    console.log(gameTitle, gameAuthor, gameShortText, isMac, isWin, isTux, gameLink, gameThumb)
  });
}

// TODO: go to next page and repeat
// document.getElementsByClassName('next_page')[0].click()
