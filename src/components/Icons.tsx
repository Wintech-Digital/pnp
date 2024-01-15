interface SvgProps {
  fill?: string;
  size?: number;
  height?: number;
  width?: number;
  className?: string;
}

export const BonusIcon = ({
  fill,
  size,
  height,
  width,
  ...props
}: SvgProps) => (
<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20.32 11.64V19.56C20.32 19.9419 20.1795 20.3082 19.9295 20.5782C19.6794 20.8483 19.3403 21 18.9867 21H6.31999C5.96637 21 5.62723 20.8483 5.37718 20.5782C5.12713 20.3082 4.98665 19.9419 4.98665 19.56V11.64M12.32 5.52C12.32 5.02159 12.1831 4.53438 11.9267 4.11996C11.6704 3.70555 11.3059 3.38256 10.8796 3.19182C10.4532 3.00109 9.98407 2.95119 9.53144 3.04842C9.07882 3.14566 8.66306 3.38566 8.33674 3.73809C8.01042 4.09052 7.78819 4.53954 7.69815 5.02837C7.60812 5.51721 7.65433 6.02389 7.83093 6.48436C8.00754 6.94483 8.30661 7.3384 8.69032 7.6153C9.07404 7.89221 9.52516 8.04 9.98665 8.04H12.32M12.32 5.52V8.04M12.32 5.52C12.32 5.02159 12.4568 4.53438 12.7132 4.11996C12.9696 3.70555 13.334 3.38256 13.7604 3.19182C14.1868 3.00109 14.6559 2.95119 15.1085 3.04842C15.5612 3.14566 15.9769 3.38566 16.3032 3.73809C16.6296 4.09052 16.8518 4.53954 16.9418 5.02837C17.0319 5.51721 16.9856 6.02389 16.809 6.48436C16.6324 6.94483 16.3334 7.3384 15.9497 7.6153C15.5659 7.89221 15.1148 8.04 14.6533 8.04H12.32M12.32 8.04V21M4.65332 11.64H20.6533C21.2053 11.64 21.6533 11.1562 21.6533 10.56V9.12C21.6533 8.52384 21.2053 8.04 20.6533 8.04H4.65332C4.10132 8.04 3.65332 8.52384 3.65332 9.12V10.56C3.65332 11.1562 4.10132 11.64 4.65332 11.64Z" stroke="#A5A5A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

);
export const MobileAppIcon = ({
  fill,
  size,
  height,
  width,
  ...props
}: SvgProps) => (
<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M11.5105 3H9.58189C9.0704 3 8.57986 3.20319 8.21819 3.56487C7.85651 3.92654 7.65332 4.41708 7.65332 4.92857V19.0714C7.65332 19.5829 7.85651 20.0735 8.21819 20.4351C8.57986 20.7968 9.0704 21 9.58189 21H16.0105C16.522 21 17.0125 20.7968 17.3742 20.4351C17.7358 20.0735 17.939 19.5829 17.939 19.0714V4.92857C17.939 4.41708 17.7358 3.92654 17.3742 3.56487C17.0125 3.20319 16.522 3 16.0105 3H14.0819M11.5105 3V4.28571H14.0819V3M11.5105 3H14.0819M11.5105 19.0714H14.0819" stroke="#A5A5A5" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

);
export const SlotsIcon = ({
  fill,
  size,
  height,
  width,
  ...props
}: SvgProps) => (
<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M17.9867 4H20.6533C20.6533 9.33334 14.7867 10.9333 14.7867 20H8.38666C8.38666 15.2 11.0533 13.0667 13.72 10.4L16.92 7.2C16.1334 7.98765 14.9494 8.26666 13.72 8.26666C12.3867 8.26666 11.184 7.73331 9.98667 7.73331C8.51466 7.73331 7.32001 8.9282 7.32001 10.4H4.65332V4H7.31998V5.6C8.38666 4.53334 9.98667 4 11.5867 4C13.72 4 14.7867 5.06666 16.92 5.06666C17.5093 5.06666 17.9867 4.58871 17.9867 4Z" stroke="#A5A5A5" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

);

export const AviatorIcon = ({
  fill,
  size,
  height,
  width,
  ...props
}: SvgProps) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.22387 16.4624L14.5785 6.32926C14.6322 6.2642 14.6895 6.20112 14.7503 6.14026C15.7837 5.10685 17.4591 5.10685 18.4925 6.14026C19.5259 7.17367 19.5259 8.84914 18.4925 9.88255C18.4317 9.94341 18.3685 10.0007 18.3035 10.0544L8.1706 18.4092V19.6566C8.1706 19.9953 8.04143 20.3339 7.78307 20.5922C7.26638 21.1089 6.42865 21.1089 5.91195 20.5922L4.04084 18.721C3.52415 18.2043 3.52415 17.3666 4.04084 16.8499C4.29917 16.5916 4.63777 16.4624 4.97638 16.4624H6.22387V16.4624Z"
      stroke="#A5A5A5"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.3211 11.6946L19.1769 19.1784C19.3602 19.6521 19.2608 20.2101 18.8785 20.5923C18.3618 21.109 17.5241 21.109 17.0074 20.5923C16.9626 20.5475 16.9216 20.5002 16.8845 20.4509L12.6152 14.7533"
      stroke="#A5A5A5"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.1982 7.47649L20.0211 4.65361"
      stroke="#A5A5A5"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.5636 3.02017L21.6533 9.11007"
      stroke="#A5A5A5"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.9385 8.31282L5.45477 5.45698C4.98108 5.27366 4.42314 5.37312 4.04091 5.75537C3.52422 6.27207 3.52422 7.10983 4.04091 7.62653C4.08576 7.67138 4.13306 7.71236 4.18235 7.74944L9.87981 12.0188"
      stroke="#A5A5A5"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BettingIcon = ({
  fill,
  size,
  height,
  width,
  ...props
}: SvgProps) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.27064 16.5613L7.46875 10.9682L12.1674 7.44479L16.9741 11.0369L15.0371 16.5613H9.27064Z"
      stroke="#A5A5A5"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M15.0449 16.541L17.4064 19.8177"
      stroke="#A5A5A5"
      strokeWidth="1.49584"
      strokeMiterlimit="10"
    />
    <path
      d="M12.1758 3.49857V7.45823"
      stroke="#A5A5A5"
      strokeWidth="1.49584"
      strokeMiterlimit="10"
    />
    <path
      d="M16.9336 11.0089L20.7222 9.79977"
      stroke="#A5A5A5"
      strokeWidth="1.49584"
      strokeMiterlimit="10"
    />
    <path
      d="M21.1533 12.5226C21.1533 17.4794 17.135 21.4977 12.1783 21.4977C7.22147 21.4977 3.15332 17.4794 3.15332 12.5226C3.15332 7.56583 7.22147 3.49768 12.1783 3.49768C17.135 3.49768 21.1533 7.56583 21.1533 12.5226Z"
      stroke="#A5A5A5"
      strokeWidth="1.49584"
      strokeMiterlimit="10"
    />
    <path
      d="M6.8877 19.7802L9.30623 16.4616"
      stroke="#A5A5A5"
      strokeWidth="1.49584"
      strokeMiterlimit="10"
    />
    <path
      d="M7.52877 10.9255L3.69043 9.60382"
      stroke="#A5A5A5"
      strokeWidth="1.49584"
      strokeMiterlimit="10"
    />
  </svg>
);

export const ChevronDown = ({
  fill,
  size,
  height,
  width,
  ...props
}: SvgProps) => (
  <svg
    fill={fill || "#fff"}
    height={size || height || 24}
    viewBox="0 0 24 24"
    width={size || width || 24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
    />
  </svg>
);

export const Logo = ({ height, width, ...props }: SvgProps) => (
  <svg
    height={height || 32}
    width={width || 132}
    viewBox="0 0 132 32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10.2412 14.5671C10.2412 14.5595 10.2433 14.552 10.2471 14.5454C10.2509 14.5388 10.2564 14.5333 10.2631 14.5296C10.2697 14.5258 10.2772 14.5238 10.2848 14.5239C10.2925 14.524 10.2999 14.526 10.3065 14.5299C10.6191 14.7151 10.9409 14.9162 11.2862 15.0171C12.1851 15.2807 13.0338 15.159 13.8321 14.6521C15.4279 13.6383 15.8938 11.4035 14.7359 9.89264C14.2674 9.28202 13.6859 8.87528 12.9913 8.67242C12.6862 8.58389 12.3194 8.54215 11.891 8.54721C9.22287 8.57908 8.6674 11.015 8.66892 13.167C8.67195 19.4533 8.67195 25.7112 8.66892 31.9408C8.66892 31.9563 8.66276 31.9711 8.6518 31.9821C8.64084 31.9931 8.62598 31.9992 8.61048 31.9992L0.0378528 31.9977C0.0283937 31.9977 0.019322 31.994 0.0126335 31.9875C0.00594487 31.9809 0.00218718 31.972 0.00218718 31.9628C-0.00135408 25.6077 -0.000595046 19.1308 0.0044639 12.5319C0.00547569 11.2424 0.173938 9.94474 0.509852 8.63903C1.27021 5.68638 3.0884 3.25505 5.70033 1.73205C8.48831 0.106614 11.4941 -0.373733 14.7176 0.291013C17.1831 0.799437 19.3784 2.11071 21.1078 3.9972C22.8259 5.87103 23.8118 8.06206 24.0658 10.5703C24.1548 11.444 24.1553 12.3412 24.0673 13.2619C23.7615 16.4612 22.1065 19.2431 19.6425 21.2912C17.3184 23.2237 14.6362 24.0966 11.5958 23.91C11.1713 23.8837 10.7486 23.8553 10.3277 23.825C10.305 23.8232 10.2838 23.8131 10.2683 23.7964C10.2528 23.7798 10.2442 23.758 10.2443 23.7354L10.2412 14.5671Z" />
    <path d="M35.1062 4.29619C35.1062 5.4347 34.6539 6.52658 33.8488 7.33163C33.0438 8.13668 31.9519 8.58896 30.8134 8.58896C29.6749 8.58896 28.583 8.13668 27.7779 7.33163C26.9729 6.52658 26.5206 5.4347 26.5206 4.29619C26.5206 3.15768 26.9729 2.06579 27.7779 1.26074C28.583 0.455694 29.6749 0.00342178 30.8134 0.00342178C31.9519 0.00342178 33.0438 0.455694 33.8488 1.26074C34.6539 2.06579 35.1062 3.15768 35.1062 4.29619Z" />
    <path d="M48.4154 8.82199C47.1337 9.40553 46.4424 10.5817 46.4424 11.9871C46.4419 18.6619 46.4422 25.3195 46.4432 31.9598C46.4432 31.9701 46.4391 31.9799 46.4319 31.9872C46.4246 31.9945 46.4148 31.9985 46.4045 31.9985L37.5291 31.9993C37.5186 31.9993 37.5086 31.9951 37.5012 31.9875C37.4938 31.98 37.4896 31.9697 37.4896 31.9591C37.5058 25.5777 37.5179 19.1931 37.526 12.8051C37.5271 11.8961 37.5296 11.3902 37.5336 11.2875C37.6793 7.69814 39.4937 4.41843 42.3978 2.31264C45.2548 0.240245 48.8889 -0.470789 52.3523 0.319165C57.2999 1.44756 61.0767 5.61284 61.5654 10.644C61.6038 11.0355 61.6231 11.5354 61.6231 12.1434C61.6241 15.0022 61.6225 21.4089 61.6185 31.3634C61.6185 31.5657 61.6228 31.7595 61.6314 31.9447C61.6317 31.9514 61.6306 31.9582 61.6283 31.9645C61.6259 31.9709 61.6222 31.9767 61.6176 31.9815C61.6129 31.9864 61.6073 31.9903 61.601 31.993C61.5948 31.9957 61.5881 31.997 61.5813 31.997L53.1362 32C53.0643 32 53.0284 31.9641 53.0284 31.8923C53.0274 25.0926 53.0271 18.411 53.0277 11.8475C53.0277 10.0801 51.6284 8.61406 49.8618 8.5526C49.3321 8.53439 48.85 8.62418 48.4154 8.82199Z" />
    <path d="M130.808 16.4164C129.894 18.6725 128.256 20.5847 126.248 21.981C124.435 23.2437 122.282 23.9107 120.072 23.9373C119.34 23.9459 118.597 23.9049 117.842 23.8144C117.785 23.8073 117.757 23.7752 117.757 23.718L117.755 14.5838C117.756 14.5734 117.758 14.5631 117.764 14.5542C117.769 14.5453 117.777 14.538 117.786 14.5332C117.796 14.5283 117.806 14.5261 117.817 14.5268C117.827 14.5274 117.837 14.5309 117.846 14.5368C118.724 15.1433 119.637 15.3017 120.584 15.0118C121.081 14.8595 121.528 14.5823 121.924 14.1801C122.509 13.5862 122.829 12.8729 122.883 12.0402C122.928 11.3355 122.783 10.714 122.446 10.1757C121.863 9.24537 121.032 8.70988 119.953 8.56924C119.64 8.52826 119.271 8.53687 118.844 8.59504C117.679 8.7544 116.887 9.57774 116.531 10.6606C116.227 11.5818 116.185 12.5349 116.187 13.5328C116.194 19.7224 116.194 25.8625 116.187 31.9529C116.187 31.9652 116.182 31.977 116.173 31.9857C116.164 31.9944 116.152 31.9992 116.14 31.9992L107.591 31.997C107.573 31.997 107.557 31.9902 107.545 31.9781C107.532 31.966 107.525 31.9496 107.525 31.9325C107.521 25.4454 107.522 18.9444 107.529 12.4295C107.53 11.1066 107.718 9.76163 108.092 8.39471C108.881 5.51794 110.748 3.14125 113.315 1.67365C115.769 0.270297 118.394 -0.250522 121.191 0.111193C123.419 0.399047 125.391 1.22315 127.105 2.5835C127.966 3.26696 128.729 4.04832 129.395 4.92756C130.609 6.53226 131.334 8.37144 131.569 10.4451C131.801 12.4887 131.559 14.5656 130.808 16.4164Z" />
    <path d="M87.7221 30.7586C84.0569 28.973 81.5314 25.493 81.1088 21.4134C81.0642 20.9819 81.0417 20.4965 81.0412 19.9572C81.0351 13.4888 81.0225 7.10218 81.0033 0.797214C81.0033 0.780711 81.0099 0.764884 81.0217 0.753214C81.0335 0.741545 81.0496 0.734989 81.0663 0.734989L89.9242 0.738783C89.9505 0.738783 89.9637 0.75219 89.9637 0.779002C89.9611 7.16086 89.9611 13.5776 89.9637 20.0293C89.9642 21.0659 90.3165 21.9127 91.0207 22.5699C92.9209 24.3418 96.089 23.2787 96.4905 20.7092C96.5664 20.2243 96.5497 19.6924 96.5504 19.1794C96.558 12.8699 96.5593 6.74072 96.5542 0.791902C96.5542 0.776808 96.5603 0.762332 96.5711 0.751659C96.5819 0.740985 96.5966 0.734989 96.6119 0.734989L105.112 0.738783C105.129 0.738783 105.137 0.747384 105.137 0.764584C105.133 7.19855 105.134 13.6328 105.139 20.0672C105.141 21.7721 104.833 23.3318 104.218 24.7463C103.375 26.6818 102.118 28.2799 100.446 29.5406C98.7685 30.8048 96.6832 31.6714 94.56 31.9044C92.1185 32.172 89.8392 31.7901 87.7221 30.7586Z" />
    <path d="M35.1131 31.9408C35.1131 31.956 35.107 31.9707 35.0962 31.9815C35.0854 31.9923 35.0707 31.9984 35.0554 31.9984H26.5791C26.5639 31.9984 26.5492 31.9923 26.5384 31.9815C26.5276 31.9707 26.5215 31.956 26.5215 31.9408V10.3001C26.5215 10.2925 26.523 10.285 26.5259 10.278C26.5288 10.271 26.533 10.2647 26.5384 10.2593C26.5437 10.254 26.5501 10.2497 26.5571 10.2468C26.5641 10.2439 26.5716 10.2424 26.5791 10.2424H35.0554C35.063 10.2424 35.0705 10.2439 35.0775 10.2468C35.0845 10.2497 35.0908 10.254 35.0962 10.2593C35.1015 10.2647 35.1058 10.271 35.1087 10.278C35.1116 10.285 35.1131 10.2925 35.1131 10.3001V31.9408Z" />
    <path d="M78.6254 19.5322C78.6254 19.5355 78.6247 19.5388 78.6235 19.5418C78.6222 19.5449 78.6204 19.5476 78.618 19.5499C78.6157 19.5523 78.6129 19.5541 78.6099 19.5554C78.6069 19.5566 78.6036 19.5573 78.6003 19.5573H64.0291C64.0258 19.5573 64.0225 19.5566 64.0195 19.5554C64.0164 19.5541 64.0137 19.5523 64.0113 19.5499C64.009 19.5476 64.0072 19.5449 64.0059 19.5418C64.0047 19.5388 64.004 19.5355 64.004 19.5322V12.0925C64.004 12.0859 64.0066 12.0795 64.0113 12.0748C64.016 12.0701 64.0224 12.0675 64.0291 12.0675H78.6003C78.6036 12.0675 78.6069 12.0682 78.6099 12.0694C78.6129 12.0707 78.6157 12.0725 78.618 12.0748C78.6204 12.0772 78.6222 12.0799 78.6235 12.083C78.6247 12.086 78.6254 12.0893 78.6254 12.0925V19.5322Z" />
  </svg>
);