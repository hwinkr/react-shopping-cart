import styled from "styled-components";

const CouponSeparator = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const CouponInfoWrapper = styled.section<{ isCouponUsable: boolean }>`
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;

  row-gap: 12px;

  color: ${({ isCouponUsable }) => (isCouponUsable ? "#000000" : "#9e9e9e")};
`;

const CouponHeader = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
`;

const CouponText = styled.span`
  margin-left: 8px;
  font-size: 16px;
  font-weight: 700;
`;

const CouponBody = styled.div`
  height: 34px;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;

const Styled = {
  CouponSeparator,
  CouponInfoWrapper,
  CouponHeader,
  CouponText,
  CouponBody,
};

export default Styled;
