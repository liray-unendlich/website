import React from 'react'
import Content from '../../components/Content';
import { Wrapper } from '../../templates/PostTemplate';

const ContactPage = () => (
  <Wrapper>
    <h1 style={{fontWeight: 600}}>お問い合わせ</h1>
    <Content>
      <p>
        <b>お問い合わせありがとうございます</b><br/>
        数日以内にお返事いたします。しばらくお待ち下さい。<br/>
        急ぎの用件でしたらTwitterのDMの方が早いので、そちらからも連絡してもらえれば反応します。
      </p>
    </Content>
  </Wrapper>
)

export default ContactPage