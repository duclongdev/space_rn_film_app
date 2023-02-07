import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';

const InfoUser = () => {
  return (
    <View style={{flexDirection: 'row', marginTop: 10}}>
      <Text style={{color: '#f4f4f4'}}>Bởi </Text>
      <Image
        source={{
          uri: 'https://images.spiderum.com/sp-xs-avatar/a0d1ce20071711ed83a82bc6df79ac6d.jpeg',
        }}
        style={{width: 26, height: 26, borderRadius: 20, marginHorizontal: 6}}
      />
      <Text style={{color: 'white', fontWeight: '600'}}> Đức Long</Text>
      <Text style={{color: '#d4d4d4'}}> Vào 6 giờ trước</Text>
    </View>
  );
};

const Title = ({content}) => {
  return (
    <Text style={{margin: 10, fontSize: 22, fontWeight: '600', color: 'white'}}>
      {content}
    </Text>
  );
};

const Content = ({content}) => {
  return (
    <Text style={{color: 'white', fontSize: 20, marginTop: 20}}>{content}</Text>
  );
};

const CustomsImage = ({link, title}) => {
  return (
    <View>
      <Image
        source={{uri: link}}
        style={{
          width: '100%',
          height: 250,
          marginTop: 10,
          resizeMode: 'center',
        }}
      />
      <Text style={{alignSelf: 'center', color: '#d4d4d4'}}>{title}</Text>
    </View>
  );
};

const Body = () => {
  return (
    <ScrollView>
      <View style={{padding: 10}}>
        <Text style={{color: '#d4d4d4', marginBottom: 10}}>Tâm lý học</Text>
        <Text
          style={{
            color: 'white',
            fontSize: 26,
            fontWeight: '600',
            marginBottom: 10,
          }}>
          Vì sao chúng ta yêu thích "Tam quốc diễn nghĩa"?
        </Text>
        <Text style={{fontSize: 20, color: '#d4d4d4'}}>
          Tam quốc diễn nghĩa” là cuốn sách gối đầu giường của vô số độc giả.
          Vậy cái hay của tác phẩm này nằm ở đâu? Hành trình và tầm ảnh hưởng
          của tác phẩm này ở Việt Nam như thế nào?
        </Text>
        <InfoUser />
      </View>
      <View style={{padding: 10}}>
        <Text style={{color: 'white', fontSize: 20}}>
          “Tam quốc diễn nghĩa” có lẽ là một trong số ít những bộ tiểu thuyết mà
          đại đa số chúng ta đều biết đến. Câu chuyện về một thời kỳ loạn lạc
          trong lịch sử Trung Quốc với những trận đánh kinh điển, những nhân vật
          huyền thoại đã trở thành một phần quen thuộc trong đời sống tinh thần
          của nhiều độc giả. Nếu đã từng đọc, hoặc xem phim “Tam quốc diễn
          nghĩa”, chắc hẳn nhiều người sẽ nhớ mãi không quên những chi tiết bất
          hủ như ba anh em Lưu Quan Trương kết nghĩa vườn đào, Chu Du hỏa thiêu
          Xích Bích, hay “Không thành kế” của Gia Cát Lượng. Không những thế, có
          những câu nói của các nhân vật trong “Tam quốc diễn nghĩa” cũng đã in
          sâu vào trí nhớ của nhiều thế hệ độc giả; nào là Tào Tháo với triết lý
          “Thà ta phụ người chứ không để người phụ ta”, hay tấm lòng trung thành
          “hết lòng tận tụy, đến chết mới thôi” của Gia Cát Lượng. Nói không
          ngoa, “Tam quốc diễn nghĩa” đã trở thành cuốn sách gối đầu giường của
          vô số độc giả. Vậy cái hay của tác phẩm này nằm ở đâu mà có thể biến
          nó trở thành một trong “Tứ đại danh tác” của văn học Trung Quốc? Hành
          trình và tầm ảnh hưởng của tác phẩm này ở Việt Nam như thế nào? Bài
          viết này hy vọng có thể giải đáp được phần nào những câu hỏi ấy.
        </Text>
        <CustomsImage
          link={
            'https://images.spiderum.com/sp-images/a94384c0a5ed11edb4b2b70a428b9d40.jpeg'
          }
          title={`Artwork của game "Total War: Three Kingdoms`}
        />
        <Title content={'Đôi nét về "Tam quốc diễn nghĩa"'} />
        <Content content="“Tam quốc diễn nghĩa”, như cách chúng ta hay gọi, có tên gốc là “Tam quốc chí thông tục diễn nghĩa”. Nó là một bộ tiểu thuyết dã sử của La Quán Trung, hoàn thành vào khoảng cuối thế kỷ 14. Nội dung của “Tam quốc” kể về một khoảng thời gian dài gần 100 năm trong lịch sử Trung Quốc. Mặc dù trên thực tế thì thời kỳ Tam quốc kéo dài 60 năm, kể từ khi Tào Phi phế Hán đế tự lập đến khi Tư Mã Viêm nhà Tấn diệt Ngô (từ năm 220 - 280); nhưng bộ tiểu thuyết của La Quán Trung còn kể về cả một quãng thời gian gần 40 năm loạn lạc từ cuối thời Đông Hán, khi khởi nghĩa Khăn Vàng nổ ra năm 184. Và mặc dù bám khá sát những sự kiện lớn trong lịch sử, nhưng rốt ráo lại thì đây vẫn là một bộ tiểu thuyết dã sử; cho nên La Quán Trung đã đưa vào đó không ít tình tiết do ông tự sáng tạo, hoặc viết khác so với chính sử. Bởi vậy nên người ta nói “Tam quốc diễn nghĩa” có bảy phần thực, ba phần hư là thế." />
        <CustomsImage
          link="https://images.spiderum.com/sp-images/f1c432c0a5ee11edb4b2b70a428b9d40.png"
          title='"Tam quốc diễn nghĩa" của đài CCTV, bắt đầu phát sóng năm 1994, được nhiều người coi là bản chuyển thể xuất sắc nhất'
        />
        <Content
          content={
            'Giá trị văn học nghệ thuật của “Tam quốc diễn nghĩa” cực kỳ to lớn, và nó có ảnh hưởng vô cùng sâu rộng; thậm chí đến mức danh tiếng át cả bộ chính sử “Tam quốc chí” nữa. “Tam quốc diễn nghĩa” từ lâu đã trở thành một phần trong đời sống của người dân Trung Quốc, và có lẽ của cả Việt Nam nữa. Những nhân vật, tích truyện của Tam quốc trở nên cực kỳ thân thuộc, ngay cả với những người có khi còn chưa từng đọc tiểu thuyết. Có cả những câu thành ngữ lấy từ các điển tích của Tam quốc đã trở thành câu cửa miệng của vô số người; ví dụ như “Nói Tào Tháo, Tào Tháo đến” hay “Ba gã thợ may cũng bằng Gia Cát Lượng”. “Tam quốc” được chuyển thể thành phim truyền hình, phim điện ảnh, hoạt hình, truyện tranh, game. Có vô số cuốn sách phân tích, bình luận, kiến giải các tình tiết Tam quốc được ra đời. Nói như vậy để thấy rằng người Trung Quốc xếp “Tam quốc diễn nghĩa” vào Tứ đại danh tác của họ không hề khó hiểu, bởi vì tầm vóc và tầm ảnh hưởng của bộ tiểu thuyết dã sử này quá to lớn.'
          }
        />
        <Content
          content={
            'Bộ tiểu thuyết “Tam quốc diễn nghĩa” ra đời là nhờ công lao của La Quán Trung; nhưng nói một cách chính xác thì những tích truyện về các nhân vật và sự kiện của Tam quốc đã tồn tại trong dân chúng từ nhiều thế kỷ trước đó. Trước La Quán Trung, từ lâu, truyện Tam quốc đã lưu hành rộng rãi trong dân gian. Nói một cách khác thì dân chúng đã sớm sáng tạo ra những nhân vật điển hình và các tích truyện về Tam quốc. Đến đầu thời Nguyên, các câu chuyện đã được thu thập thành một cốt truyện hoàn chỉnh có đầu có cuối, gọi là “Tam quốc chí bình thoại”. Các câu chuyện trong “Tam quốc chí bình thoại” là đề tài tham khảo để các nhà viết kịch thời Nguyên biên soạn nhiều vở kịch nổi tiếng dựa trên các tích truyện đó.'
          }
        />
        <CustomsImage
          link="https://images.spiderum.com/sp-images/d476a4c0a5f111edb4b2b70a428b9d40.png"
          title="Tranh minh họa tích Tào Tháo và Lưu Bị uống rượu luận anh hùng"
        />

        <Content
          content={
            'Nguyên nhân mà “Tam quốc diễn nghĩa” nổi danh và được yêu thích nhiều đến như vậy, cố nhiên là bởi chính bản thân nó đã là một tác phẩm có giá trị lớn trong kho tàng văn học Trung Quốc. Thời nhà Thanh, khi chỉnh lý bộ “Tam quốc diễn nghĩa” gốc của La Quán Trung, Mao Tôn Cương đã ca ngợi bộ tiểu thuyết này là “đệ nhất tài tử thư”, nghĩa là “cuốn sách đệ nhất tài tử”; cho thấy tác phẩm được đánh giá cao như thế nào. Tuy nhiên, ngoài nguyên nhân chủ quan ấy, không thể không kể đến yếu tố khách quan của thời đại và xã hội cũng góp phần không nhỏ khiến cho “Tam quốc diễn nghĩa” có thể được phổ biến rộng rãi.'
          }
        />
        <Content
          content={
            'Chủ đề chính của tác phẩm là “nghĩa”, tức là về tư tưởng chính nghĩa của La Quán Trung, như có thể thấy ngay từ tiêu đề. La Quán Trung dùng cái nền lịch sử của Tam quốc để diễn giải về nghĩa, và đó là chủ đề chính xuyên suốt của tác phẩm. “Tam quốc diễn nghĩa” ngoài việc kể một câu chuyện hấp dẫn, còn lồng vào đó những bài học đạo đức và tư tưởng đúng với truyền thống văn hóa Trung Quốc. "Tam quốc diễn nghĩa" là một tác phẩm thể hiện khá rõ về thế giới quan, nhân sinh quan, quan niệm giá trị và quan niệm thẩm mỹ của văn hóa Trung Quốc. Các nhân vật trong “Tam quốc diễn nghĩa” chính là đại diện cho những nét tính cách và đạo đức tốt - xấu; dù cho hình tượng của họ có sai khác so với chính sử. Thế nhưng chính những đặc trưng tính cách đậm chất nghệ thuật và sinh động ấy, đã khiến dân chúng dễ dàng hiểu và tiếp nhận các nhân vật trong tác phẩm hơn. Vì vậy, cho nên “Tam quốc diễn nghĩa” mới có thể đi sâu vào lòng dân chúng và được yêu thích như vậy.'
          }
        />
        <Content
          content={
            'Quan trọng hơn cả, có lẽ chính là việc La Quán Trung viết “Tam quốc diễn nghĩa” với thiên hướng rất rõ ràng là “ủng Lưu phản Tào” và trung thành với nhà Hán. Xuyên suốt “Tam quốc diễn nghĩa”, La Quán Trung luôn nêu cao tư tưởng trung nghĩa với nhà Hán. Khuynh hướng của La Quán Trung chính là nhận nhà Thục Hán của Lưu Bị làm chính thống, coi nhà Tào Ngụy và Đông Ngô là ngụy triều. Ngòi bút của ông khi mô tả các nhân vật của Thục Hán đều đậm màu sắc tích cực, toát lên chính khí lẫm liệt, xứng danh các trung thần nghĩa sĩ. Điều này vô hình chung lại phù hợp với tư tưởng của triều đình, thành ra “Tam quốc diễn nghĩa” lại được khuyến khích truyền bá hơn nữa. Khi mà tác phẩm vốn đã hay, lại phù hợp với tư tưởng của triều đình và cả tư tưởng của dân chúng nữa, muốn không nổi danh cũng khó.'
          }
        />
        <CustomsImage
          link={
            'https://images.spiderum.com/sp-images/6cdd6230a5f211edb4b2b70a428b9d40.png'
          }
          title="Bản đồ Tam quốc"
        />
        <Title content={'Kết'} />
        <Content
          content={
            '“Tam quốc diễn nghĩa” là một bộ tiểu thuyết dã sử kinh điển, đã đi vào lòng người đọc trong hàng trăm năm. Thông qua bộ truyện, chúng ta có thể cảm nhận được phần nào hơi thở của một thời đại loạn lạc, cảm nhận được cái “nghĩa” của những nhân vật và nhân sinh quan cũng như tư tưởng của người dân Trung Quốc. Ít có bộ tiểu thuyết nào lại được nhiều người mến mộ đến như vậy. Giá trị văn học nghệ thuật mà “Tam quốc diễn nghĩa” đem lại quả thực to lớn và đáng nể, đúng như đánh giá của Mao Tôn Cương, rằng đây đích xác là “đệ nhất tài tử thư”, xứng đáng là một trong “Tứ đại danh tác” của văn học Trung Quốc.'
          }
        />
        <CustomsImage link="https://images.spiderum.com/sp-images/8227f260a5f511edb022ef85268b58f0.jpeg" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          margin: 10,
          borderWidth: 0.5,
          borderRadius: 4,
          borderColor: '#d4d4d4',
        }}>
        <View style={{flex: 2, marginRight: 6, fontWeight: '600'}}>
          <Text style={{fontSize: 20, color: 'white'}}>
            Tư tưởng Khắc kỷ của Seneca đã được thể hiện như thế nào khi ông đối
            diện với cái chết?
          </Text>
          <Text style={{fontSize: 18, color: '#d4d4d4', marginTop: 10}}>
            Bài viết gửi bởi Spiderum Team 7 trong mục Sách
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Image
            source={{
              uri: 'https://images.spiderum.com/sp-thumbnails/d49f0290495211ed87256714f0499012.jpg',
            }}
            style={{width: 100, height: 100, borderRadius: 4}}
          />
        </View>
      </View>

      <View style={{height: 200}}></View>
    </ScrollView>
  );
};

export default Body;
