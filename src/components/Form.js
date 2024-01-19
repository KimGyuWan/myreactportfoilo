import React, { useEffect, useState } from 'react'
import './form.scss'
import { FixedformLg, FixedformSm, FixedChat, FixedKakao } from './style/Commonui'
import { useForm } from "react-hook-form"

function Form() {
  const [dim, setDim] = useState(false)

  const checkWidthAndSetDim = () => {
    const width = window.innerWidth;
    if (width >= 1000) {
      setDim(false);
    }
  };

  useEffect(() => {
    document.body.classList = dim ? "position-relative dim" : "position-relative";

    window.addEventListener('resize', checkWidthAndSetDim);

    checkWidthAndSetDim();

    return () => {
      window.removeEventListener('resize', checkWidthAndSetDim);
    };
  }, [dim])

  const {
    register,
    handleSubmit,
    watch
  } = useForm()

  const onSubmit = (data) => console.log(data)

  console.log(watch("example"))

  return (
    <>
      <FixedKakao className='d-flex d-lg-none kakao'>
        <p>온라인</p><p>문의</p>
      </FixedKakao >
      <FixedChat className='d-flex d-lg-none chat'>
        <div>챗봇</div>
      </FixedChat>
      <FixedformSm onClick={() => { setDim(true) }} className='d-flex d-lg-none sujest'>
        <div>창업상담</div>
      </FixedformSm>
      {dim && <div>
        <form onSubmit={handleSubmit(onSubmit)} name='form1' className='firstform mycontainer d-block d-lg-none'>
          <div className='first d-flex justify-content-between py-4 border-bottom align-items-center'>
            <p>창업상담</p>
            <button className="closedim" onClick={() => { setDim(false) }}><i className="bi bi-x-lg"></i></button>
          </div>
          <div className='py-3'>
            <label htmlFor="name1" className='pb-2'>이름</label>
            <div className='d-flex justify-content-center'>
              <input className='nameinput1 mx-3' {...register("name1", { required: true })} />
            </div>
          </div>
          <div className='pb-3'>
            <label htmlFor="phone1" className='pb-2'>연락처</label>
            <div>
              <input className='phoneinput1 ml-3' {...register("phone1[0]", { required: true })} /><span className='mx-1'>-</span>
              <input className='phoneinput1' {...register("phone1[1]", { required: true })} /><span className='mx-1'>-</span>
              <input className='phoneinput1 mr-3' {...register("phone1[2]", { required: true })} />
            </div>
          </div>
          <div className='pb-3'>
            <label htmlFor="position1" className='pb-2'>지역 및 내용</label>
            <input className='positioninput1 mx-3' {...register("position1", { required: true })} />
          </div>
          <div>
            <p className='pb-2'>개인정보 수집 및 이용 동의</p>
            <div class="form-control">(주)포트코퍼레이션(이하 ‘회사’라 한다)는 개인정보 보호법 제30조에 따라 정보 주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립, 공개합니다.<br />
              <br />
              <strong>제1조 (개인정보의 처리목적)</strong><br />
              회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.<br />
              <br />
              1. 홈페이지 회원 가입 및 관리<br />
              회원 가입 의사 확인, 회원제 서비스 제공에 따른 본인 식별․인증, 회원자격 유지․관리, 제한적 본인확인제 시행에 따른 본인확인, 서비스 부정 이용 방지, 만 14세 미만 아동의 개인정보처리 시 법정대리인의 동의 여부 확인, 각종 고지․통지, 고충 처리 등을 목적으로 개인정보를 처리합니다.<br />
              <br />
              2. 재화 또는 서비스 제공<br />
              물품 배송, 서비스 제공, 계약서 및 청구서 발송, 콘텐츠 제공, 맞춤서비스 제공, 본인인증, 연령인증, 요금 결제 및 정산, 채권추심 등을 목적으로 개인정보를 처리합니다.<br />
              <br />
              3. 고충 처리<br />
              민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락․통지, 처리 결과 통보 등의 목적으로 개인정보를 처리합니다.<br />
              <br />
              <strong>제2조 (개인정보의 처리 및 보유기간)</strong><br />
              ① 회사는 법령에 따른 개인정보 보유, 이용 기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유, 이용 기간 내에서 개인정보를 처리, 보유합니다.<br />
              ② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.<br />
              <br />
              1. 홈페이지 회원 가입 및 관리 : 사업자/단체 홈페이지 탈퇴 시까지<br />
              다만, 다음의 사유에 해당하는 경우에는 해당 사유 종료 시까지<br />
              1) 관계 법령 위반에 따른 수사, 조사 등이 진행 중인 경우에는 해당 수사, 조사 종료 시까지<br />
              2) 홈페이지 이용에 따른 채권 및 채무관계 잔존 시에는 해당 채권, 채무 관계 정산 시까지<br />
              <br />
              2. 재화 또는 서비스 제공 : 재화․서비스 공급완료 및 요금결제․정산 완료 시까지<br />
              다만, 다음의 사유에 해당하는 경우에는 해당 기간 종료 시까지<br />
              1) 「전자상거래 등에서의 소비자 보호에 관한 법률」에 따른 표시․광고, 계약내용 및 이행 등 거래에 관한 기록<br />
              - 표시․광고에 관한 기록 : 6월<br />
              - 계약 또는 청약 철회, 대금결제, 재화 등의 공급기록 : 5년<br />
              - 소비자 불만 또는 분쟁 처리에 관한 기록 : 3년<br />
              2) 「통신비밀보호법」 제41조에 따른 통신사실확인자료 보관<br />
              - 가입자 전기통신일시, 개시․종료 시간, 상대방 가입자 번호, 사용도수, 발신기지국 위치추적자료 : 1년<br />
              - 컴퓨터 통신, 인터넷 로그 기록자료, 접속지 추적자료 : 3개월<br />
              <br />
              <strong>제3조 (개인정보의 제3자 제공)</strong><br />
              ① 회사는 정보주체의 개인정보를 제1조(개인정보의 처리목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.<br />
              ② 회사는 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.<br />
              - 개인정보를 제공받는 자 : &lt;예) (주) OOO 카드&gt;<br />
              - 제공받는 자의 개인정보 이용목적 : &lt;예) 이벤트 공동개최 등 업무제휴 및 제휴 신용카드 발급&gt;<br />
              - 제공하는 개인정보 항목 : &lt;예) 성명, 주소, 전화번호, 이메일주소, 카드결제계좌정보&gt;<br />
              - 제공받는 자의 보유, 이용기간 : &lt;예) 신용카드 발급계약에 따른 거래기간동안&gt;<br />
              <br />
              <strong>제4조(개인정보처리의 위탁)</strong><br />
              ① 회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.<br />
              <br />
              1. 전화 상담 센터 운영<br />
              - 위탁받는 자 (수탁자) : OOO CS센터<br />
              - 위탁하는 업무의 내용 : 전화상담 응대, 부서 및 직원 안내 등<br />
              <br />
              2. A/S 센터 운영<br />
              - 위탁받는 자 (수탁자) : OOO 전자<br />
              - 위탁하는 업무의 내용 : 고객 대상 제품 A/S 제공<br />
              <br />
              ② 회사는 위탁계약 체결 시 개인정보 보호법 제25조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적․관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리․감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.<br />
              ③ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.<br />
              <br />
              <strong>제5조(이용자 및 법정대리인의 권리와 그 행사 방법)</strong><br />
              <br />
              ① 정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.<br />
              1. 개인정보 열람 요구<br />
              2. 오류 등이 있을 경우 정정 요구<br />
              3. 삭제요구<br />
              4. 처리정지 요구<br />
              ② 제1항에 따른 권리 행사는 회사에 대해 서면, 전화, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체없이 조치하겠습니다.<br />
              ③ 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.<br />
              ④ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.<br />
              ⑤ 정보주체는 개인정보 보호법 등 관계 법령을 위반하여 회사가 처리하고 있는 정보주체 본인이나 타인의 개인정보 및 사생활을 침해하여서는 아니 됩니다.<br />
              <br />
              <strong>제6조(처리하는 개인정보 항목)</strong><br />
              회사는 다음의 개인정보 항목을 처리하고 있습니다.<br />
              <br />
              1. 홈페이지 회원 가입 및 관리<br />
              필수항목 : &lt;예) 성명, 생년월일, 아이디, 비밀번호, 주소, 전화번호, 성별, 이메일주소, 아이핀번호&gt;<br />
              선택항목 : &lt;예) 결혼 여부, 관심 분야&gt;<br />
              <br />
              2. 재화 또는 서비스 제공<br />
              필수항목 : &lt;예) 성명, 생년월일, 아이디, 비밀번호, 주소, 전화번호, 이메일주소, 아이핀번호, 신용카드번호, 은행계좌정보 등 결제정보&gt;<br />
              선택항목 : &lt;관심분야, 과거 구매내역&gt;<br />
              <br />
              3. 인터넷 서비스 이용과정에서 아래 개인정보 항목이 자동으로 생성되어 수집될 수 있습니다.<br />
              IP주소, 쿠키, MAC주소, 서비스 이용기록, 방문기록, 불량 이용기록 등<br />
              <br />
              <strong>제7조(개인정보의 파기)</strong><br />
              ① 회사는 개인정보 보유 기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.<br />
              ② 정보주체로부터 동의받은 개인정보 보유 기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.<br />
              ③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.<br />
              1. 파기 절차<br />
              회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.<br />
              2. 파기 방법<br />
              회사는 전자적 파일 형태로 기록․저장된 개인정보는 기록을 재생할 수 없도록 로우레밸포멧(Low Level Format) 등의 방법을 이용하여 파기하며, 종이 문서에 기록․저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.<br />
              <br />
              <strong>제8조(개인정보의 안전성 확보조치)</strong><br />
              회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 하고 있습니다.<br />
              1. 관리적 조치 : 내부관리계획 수립 및 시행, 정기적 직원 교육 등<br />
              2. 기술적 조치 : 개인정보처리시스템 등의 접근 권한 관리, 접근통제시스템 설치, 고유 식별정보<br />
              등의 암호화, 보안프로그램 설치<br />
              3. 물리적 조치 : 전산실, 자료보관실 등의 접근통제<br />
              <br />
              <strong>제9조(개인정보 자동 수집 장치의 설치∙운영 및 거부에 관한 사항)</strong><br />
              ① 회사는 이용자에게 개별적인 맞춤 서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.<br />
              ② 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에 보내는 소량의 정보이며 이용자들의 컴퓨터 내의 하드디스크에 저장되기도 합니다.<br />
              가. 쿠키의 사용 목적: 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다.<br />
              나. 쿠키의 설치∙운영 및 거부 : 웹브라우저 상단의 도구&gt;인터넷 옵션&gt;개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다.<br />
              다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.<br />
              <br />
              <strong>제10조(개인정보 보호책임자)</strong><br />
              ① 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만 처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.<br />
              <br />
              ▶ 개인정보 보호책임자<br />
              성명 : 심상진<br />
              직책 : OOO<br />
              연락처 : 1544-8173  <br />
              ※ 개인정보 보호 담당부서로 연결됩니다.<br />
              <br />
              ▶ 개인정보 보호 담당부서<br />
              부서명 : OOO 팀<br />
              담당자 : 심상진<br />
              연락처 : 1544-8173  <br />
              <br />
              ② 정보주체께서는 회사의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만 처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 회사는 정보주체의 문의에 대해 지체없이 답변 및 처리해드릴 것입니다.<br />
              <br />
              <strong>제11조(개인정보 열람청구)</strong><br />
              정보주체는 개인정보 보호법 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다. 회사는 정보주체의 개인정보 열람 청구가 신속하게 처리되도록 노력하겠습니다.<br />
              <br />
              ▶ 개인정보 열람청구 접수․처리 부서<br />
              부서명 : OOO<br />
              담당자 : 심상진<br />
              연락처 : 1544-8173  <br />
              <br />
              <strong>제12조(권익침해 구제 방법)</strong><br />
              정보주체는 아래의 기관에 대해 개인정보 침해에 대한 피해구제, 상담 등을 문의하실 수 있습니다.<br />
              <br />
              ▶ 개인정보 침해신고센터 (한국인터넷진흥원 운영)<br />
              - 소관 업무 : 개인정보 침해사실 신고, 상담 신청<br />
              - 홈페이지 : privacy.kisa.or.kr<br />
              - 전화 : (국번없이) 118<br />
              - 주소 : (58324) 전남 나주시 진흥길 9(빛가람동 301-2) 3층 개인정보침해신고센터<br />
              <br />
              ▶ 개인정보 분쟁조정위원회<br />
              - 소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결)<br />
              - 홈페이지 : www.kopico.go.kr<br />
              - 전화 : (국번없이) 1833-6972<br />
              - 주소 : (03171)서울특별시 종로구 세종대로 209 정부서울청사 4층<br />
              <br />
              ▶ 대검찰청 사이버범죄수사단 : 02-3480-3573 (www.spo.go.kr)<br />
              ▶ 경찰청 사이버안전국 : 182 (http://cyberbureau.police.go.kr)<br />
              <br />
              <strong>제13조(개인정보 처리방침 시행 및 변경)</strong><br />
              이 개인정보 처리방침은 2021. 11. 1부터 적용됩니다.</div>
            <div className='pt-3'>
              <input type="checkbox" name='checkbox1' className='checkbox mr-2' />
              <label htmlFor="checkbox1">개인정보 수집 및 이용에 동의합니다.</label>
            </div>
          </div>
          <div className='d-flex justify-content-center pt-4'>
            <input className='submitinput' type="submit" value={"상담신청"} />
          </div>
        </form >
      </div >}

      <FixedformLg className='d-none d-lg-block'>
        <section className='fixform d-flex justify-content-center'>
          <div className='fixformdiv container row justify-content-between'>
            <div className='propos'>
              <p className='proposal mb-2'>창업상담</p>
              <p className='proposalnum'>1544-8173</p>
            </div>
            <div className='formform ml-3'>
              <form onSubmit={handleSubmit(onSubmit)} name='form2' className='secondform'>
                <div className='mb-2 d-flex align-items-center'>
                  <label htmlFor="name">이름</label>
                  <input className='nameinput mx-3' {...register("name", { required: true })} />
                  <label htmlFor="phone">연락처</label>
                  <input className='phoneinput ml-3' {...register("phone[0]", { required: true })} /><span className='mx-1'>-</span>
                  <input className='phoneinput' {...register("phone[1]", { required: true })} /><span className='mx-1'>-</span>
                  <input className='phoneinput mr-3' {...register("phone[2]", { required: true })} />
                  <label htmlFor="position">지역 및 내용</label>
                  <input className='positioninput mx-3' {...register("position", { required: true })} />
                  <input className='submitinput' type="submit" value={"상담신청"} />
                </div>
                <div>
                  <input type="checkbox" name='checkbox' className='checkbox mr-2' />
                  <label htmlFor="checkbox">개인정보 수집 및 이용에 동의합니다.</label>
                </div>
              </form>
            </div>
          </div>
        </section>
      </FixedformLg >
    </>
  )
}

export default Form
