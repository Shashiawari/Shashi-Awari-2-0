"use client";
import React from "react";
import "./Main.css";
import anime from "animejs/lib/anime.es.js";
import { useEffect } from "react";
const Main = () => {
  useEffect(() => {
    var lineDrawing = anime({
      targets: "#lineDrawing .lines path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 3000,
      delay: function (el, i) {
        return i * 80;
      },
      direction: "alternate",
      loop: true,
    });
  }, []);
  return (
    <div className=" center ">
    <div className="boxblur"></div>
      <div className="outmain ">
      <video
            src="dj.mp4"
            muted
            autoPlay
            loop
           className="mainvid"
          ></video>
        
        <div className="log d-flex">
        <div id="lineDrawing">
        <svg
          width="913"
          className="lines"
          height="200"
          viewBox="0 0 613 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M47.488 32.512C44.5013 32.512 41.6 32.128 38.784 31.36L38.4 30.592C38.4853 30.2507 38.528 29.824 38.528 29.312C38.528 27.264 37.7173 25.6 36.096 24.32C34.4747 23.04 32.64 22.4 30.592 22.4C28.7147 22.4 27.0507 22.9973 25.6 24.192C24.1493 25.3867 23.424 27.0933 23.424 29.312C23.424 31.616 24.1067 33.1947 25.472 34.048C26.9227 34.816 28.928 35.3707 31.488 35.712C32.6827 35.8827 33.5787 36.0533 34.176 36.224C41.856 38.272 47.872 41.9413 52.224 47.232C56.6613 52.5227 58.88 58.496 58.88 65.152C58.88 70.9547 57.6 75.9893 55.04 80.256C52.48 84.4373 49.024 87.5947 44.672 89.728C40.4053 91.8613 35.7547 92.928 30.72 92.928C25.6 92.928 20.6933 91.904 16 89.856C11.3067 87.808 7.46667 84.864 4.48 81.024C1.49333 77.184 0 72.6613 0 67.456C0 65.92 0.341333 64.9813 1.024 64.64C1.70667 64.2987 2.98667 64.128 4.864 64.128H10.496C16.8107 64.128 20.2667 64.4267 20.864 65.024C21.0347 67.4133 21.9733 69.2907 23.68 70.656C25.3867 71.936 27.3493 72.576 29.568 72.576C31.616 72.576 33.3653 72.0213 34.816 70.912C36.2667 69.7173 36.992 68.0533 36.992 65.92C36.992 62.1653 35.4987 59.52 32.512 57.984C29.6107 56.448 25.6427 55.2533 20.608 54.4C20.4373 54.3147 19.1147 54.016 16.64 53.504C13.9093 52.8213 11.3493 51.2853 8.96 48.896C6.656 46.4213 4.77867 43.5627 3.328 40.32C1.96267 37.0773 1.28 34.048 1.28 31.232C1.28 25.6853 2.51733 20.6507 4.992 16.128C7.46667 11.52 10.9653 7.89334 15.488 5.248C20.0107 2.60267 25.3013 1.28 31.36 1.28C36.1387 1.28 40.6613 2.13333 44.928 3.84C49.28 5.54667 52.7787 8.14934 55.424 11.648C58.1547 15.0613 59.52 19.2427 59.52 24.192C59.52 25.5573 59.3493 27.776 59.008 30.848C57.8987 31.9573 54.0587 32.512 47.488 32.512ZM47.744 31.36C49.9627 31.36 53.2907 31.0187 57.728 30.336C58.1547 27.9467 58.368 25.8133 58.368 23.936C58.368 19.4133 57.0453 15.5307 54.4 12.288C51.7547 9.04534 48.2987 6.61333 44.032 4.992C39.8507 3.28533 35.4987 2.432 30.976 2.432C25.5147 2.432 20.608 3.712 16.256 6.272C11.9893 8.74667 8.61867 12.16 6.144 16.512C3.75467 20.7787 2.56 25.4293 2.56 30.464C2.56 33.1093 3.15733 36.0107 4.352 39.168C5.54667 42.3253 7.21067 45.1413 9.344 47.616C11.5627 50.0053 14.0373 51.5413 16.768 52.224C17.7067 52.48 19.2 52.7787 21.248 53.12C24.7467 53.8027 27.648 54.528 29.952 55.296C32.256 55.9787 34.2187 57.1733 35.84 58.88C37.5467 60.5867 38.4 62.9333 38.4 65.92C38.4 68.3947 37.504 70.3573 35.712 71.808C33.92 73.1733 31.8293 73.856 29.44 73.856C26.9653 73.856 24.7467 73.1307 22.784 71.68C20.8213 70.2293 19.7547 68.224 19.584 65.664C16.6827 65.664 14.5067 65.6213 13.056 65.536L6.4 65.408C4.096 65.408 2.38933 65.4933 1.28 65.664C1.28 70.9547 2.60267 75.5627 5.248 79.488C7.97867 83.4133 11.5627 86.4 16 88.448C20.5227 90.496 25.4293 91.52 30.72 91.52C35.4987 91.52 39.936 90.5387 44.032 88.576C48.128 86.528 51.4133 83.5413 53.888 79.616C56.3627 75.6053 57.6 70.8267 57.6 65.28C57.6 59.8187 56.0213 54.8267 52.864 50.304C49.792 45.7813 45.5253 42.1973 40.064 39.552C39.2107 39.1253 38.0587 38.784 36.608 38.528C35.2427 38.1867 34.3467 37.9733 33.92 37.888C30.08 37.2053 27.136 36.3093 25.088 35.2C23.1253 34.0907 22.144 32.1707 22.144 29.44C22.144 26.7947 22.9547 24.7893 24.576 23.424C26.2827 21.9733 28.2453 21.248 30.464 21.248C32.9387 21.248 35.1147 21.9733 36.992 23.424C38.9547 24.8747 39.936 26.7093 39.936 28.928L39.808 30.208C42.368 30.976 45.0133 31.36 47.744 31.36Z"
            fill="white"
          />
          <path
            d="M121.901 90.752L121.389 91.392C119.341 91.904 116.653 92.16 113.325 92.16L105.133 92.032C104.877 92.1173 104.536 92.16 104.109 92.16C103.597 92.16 103.213 92.0747 102.957 91.904C102.786 91.8187 102.658 91.7333 102.573 91.648C101.89 87.04 101.549 80.9813 101.549 73.472C101.549 72.704 101.506 70.528 101.421 66.944C101.336 63.36 101.08 59.9467 100.653 56.704C98.2637 56.2773 96.1303 56.064 94.253 56.064C91.8637 56.064 89.389 56.32 86.829 56.832C86.4877 59.2213 86.317 61.952 86.317 65.024C86.317 66.816 86.4023 69.5893 86.573 73.344C86.7437 77.0987 86.829 79.872 86.829 81.664C86.829 85.248 86.6157 88.32 86.189 90.88C86.0183 90.88 85.933 90.9653 85.933 91.136C84.7383 91.904 83.1597 92.288 81.197 92.288C80.0877 92.288 78.4237 92.1173 76.205 91.776C73.9863 91.4347 72.493 91.264 71.725 91.264C70.6157 91.264 69.549 91.4773 68.525 91.904C67.0743 91.392 66.349 86.5707 66.349 77.44V70.016C66.349 64.128 66.1783 55.3813 65.837 43.776C65.4957 32.1707 65.325 23.3813 65.325 17.408C65.325 15.104 65.3677 11.9893 65.453 8.064C65.5383 4.05333 65.6237 2.048 65.709 2.048V2.176L66.349 1.408C67.2023 1.408 68.013 1.45067 68.781 1.536C69.6343 1.62134 70.5303 1.664 71.469 1.664L75.181 1.536C76.8877 1.36533 78.1677 1.28 79.021 1.28C81.6663 1.28 83.2023 1.664 83.629 2.432C84.0557 5.248 84.3543 8.27733 84.525 11.52C84.6957 14.7627 84.781 16.8107 84.781 17.664C84.9517 24.7467 85.3357 30.0373 85.933 33.536H85.805L86.189 35.584C87.8957 35.9253 89.8583 36.096 92.077 36.096C94.381 36.096 96.7277 35.8827 99.117 35.456C99.7143 27.52 100.013 20.6507 100.013 14.848C100.013 10.8373 99.885 6.784 99.629 2.688C100.397 1.92 102.189 1.28 105.005 0.767998C107.821 0.255999 110.338 0 112.557 0C114.093 0 115.33 0.170667 116.269 0.512001H117.805C117.805 0.512001 118.018 0.725334 118.445 1.152L121.901 90.752ZM116.269 90.624C117.72 90.624 119.17 90.496 120.621 90.24L117.165 1.792C116.568 1.792 116.056 1.74933 115.629 1.664C110.509 1.664 105.602 2.13333 100.909 3.072C101.165 6.912 101.293 10.752 101.293 14.592C101.293 20.6507 100.994 27.776 100.397 35.968C99.9703 36.3947 99.757 36.608 99.757 36.608H100.013C99.3303 36.608 97.8797 36.736 95.661 36.992C93.5277 37.248 91.821 37.376 90.541 37.376C88.4077 37.376 86.573 36.992 85.037 36.224C84.4397 32.384 83.9703 26.6667 83.629 19.072C83.2877 11.904 82.861 6.528 82.349 2.944C81.7517 2.85867 80.8557 2.816 79.661 2.816C78.637 2.816 77.101 2.90133 75.053 3.072C73.005 3.24267 71.5543 3.328 70.701 3.328C69.2503 3.328 68.013 3.15734 66.989 2.816C66.733 8.96 66.605 15.0613 66.605 21.12C66.605 33.8347 66.6903 45.0133 66.861 54.656C67.117 64.2133 67.5863 73.6 68.269 82.816C68.269 83.9253 68.3117 84.7787 68.397 85.376C68.397 87.68 68.4823 89.3867 68.653 90.496C69.5917 90.24 70.4877 90.112 71.341 90.112C72.365 90.112 73.9863 90.2827 76.205 90.624C78.253 90.9653 79.8317 91.136 80.941 91.136C82.477 91.136 83.7997 90.8373 84.909 90.24C85.3357 87.68 85.549 84.5227 85.549 80.768L85.421 72.704C85.2503 69.12 85.165 66.432 85.165 64.64C85.165 61.4827 85.3357 58.6667 85.677 56.192C86.3597 55.8507 87.7677 55.5093 89.901 55.168C92.0343 54.8267 94.1677 54.656 96.301 54.656C98.9463 54.656 100.738 54.9973 101.677 55.68C101.933 55.936 102.146 57.216 102.317 59.52C102.488 61.824 102.573 63.5733 102.573 64.768C102.573 70.5707 102.616 75.4347 102.701 79.36C102.872 83.2 103.213 87.04 103.725 90.88H104.493C105.602 90.5387 107.096 90.368 108.973 90.368C110.509 90.368 111.704 90.4107 112.557 90.496L116.269 90.624Z"
            fill="white"
          />
          <path
            d="M181.68 91.52C181.253 92.3733 178.693 92.8 174 92.8C172.123 92.8 169.989 92.672 167.6 92.416C165.211 92.2453 163.76 91.8613 163.248 91.264C162.395 89.3013 161.541 86.1867 160.688 81.92C160.176 79.36 159.664 77.2693 159.152 75.648C158.725 73.9413 158.128 72.32 157.36 70.784C156.677 70.784 155.952 70.7413 155.184 70.656C154.416 70.5707 153.691 70.528 153.008 70.528C152.667 70.6987 152.24 70.784 151.728 70.784L150.192 70.656C149.424 72.2773 148.869 74.1547 148.528 76.288C148.272 78.336 148.101 79.5733 148.016 80C147.675 82.6453 147.248 84.9067 146.736 86.784C146.309 88.576 145.627 90.24 144.688 91.776L143.92 92.16H144.048L142.896 92.288L135.216 92.16C130.949 91.9893 127.664 91.904 125.36 91.904L125.232 91.776L124.976 91.136C125.403 89.6853 125.701 87.8933 125.872 85.76C126.043 84.224 126.213 83.1573 126.384 82.56C131.248 51.7547 137.307 24.832 144.56 1.792L145.2 1.28H145.84C146.352 1.024 149.083 0.896004 154.032 0.896004C155.227 0.810666 156.421 0.767998 157.616 0.767998C158.896 0.767998 160.005 0.725332 160.944 0.639999C161.627 1.408 162.224 3.02933 162.736 5.504C163.333 7.89333 163.675 9.30133 163.76 9.728C164.187 11.8613 164.4 12.928 164.4 12.928C167.728 27.264 172.848 50.432 179.76 82.432L181.68 91.136V91.52ZM174.128 91.52C176.432 91.52 178.48 91.3493 180.272 91.008L172.208 54.272C167.685 34.048 164.656 20.3947 163.12 13.312C163.035 12.8853 162.651 11.392 161.968 8.832C161.115 5.76 160.603 3.456 160.432 1.92C156.421 2.34666 151.515 2.56 145.712 2.56C138.032 26.9653 132.016 53.76 127.664 82.944C127.579 83.6267 127.408 84.8213 127.152 86.528C126.981 88.1493 126.725 89.5573 126.384 90.752C132.016 91.008 136.027 91.136 138.416 91.136C141.061 91.136 142.811 91.0507 143.664 90.88C144.517 89.5147 145.157 87.936 145.584 86.144C146.096 84.2667 146.565 82.048 146.992 79.488C147.675 75.0507 148.443 71.808 149.296 69.76L149.808 69.376H152.496C152.752 69.2053 153.264 69.12 154.032 69.12C154.8 69.12 155.568 69.2053 156.336 69.376C157.104 69.4613 157.787 69.632 158.384 69.888C159.493 72.0213 160.304 74.368 160.816 76.928C161.413 79.488 161.755 80.9813 161.84 81.408C162.608 85.3333 163.376 88.32 164.144 90.368C164.997 90.4533 166.021 90.624 167.216 90.88C168.411 91.0507 169.392 91.1787 170.16 91.264C171.867 91.4347 173.189 91.52 174.128 91.52ZM150.704 55.68C149.68 55.68 148.869 55.3813 148.272 54.784C149.893 36.608 151.557 27.52 153.264 27.52H153.776C155.141 29.1413 156.123 31.744 156.72 35.328C157.403 38.912 157.957 43.4347 158.384 48.896C158.469 49.8347 158.555 50.816 158.64 51.84C158.725 52.864 158.853 53.888 159.024 54.912L158.384 55.552L150.704 55.68ZM151.984 54.528C153.179 54.528 155.056 54.4427 157.616 54.272C156.592 45.6533 155.696 39.0827 154.928 34.56C154.843 34.2187 154.715 33.3653 154.544 32C154.373 30.6347 154.032 29.6533 153.52 29.056C152.581 31.9573 151.856 34.944 151.344 38.016C150.917 41.0027 150.491 44.8427 150.064 49.536L149.552 54.4C150.064 54.4853 150.875 54.528 151.984 54.528Z"
            fill="white"
          />
          <path
            d="M227.988 32.512C225.001 32.512 222.1 32.128 219.284 31.36L218.9 30.592C218.985 30.2507 219.028 29.824 219.028 29.312C219.028 27.264 218.217 25.6 216.596 24.32C214.975 23.04 213.14 22.4 211.092 22.4C209.215 22.4 207.551 22.9973 206.1 24.192C204.649 25.3867 203.924 27.0933 203.924 29.312C203.924 31.616 204.607 33.1947 205.972 34.048C207.423 34.816 209.428 35.3707 211.988 35.712C213.183 35.8827 214.079 36.0533 214.676 36.224C222.356 38.272 228.372 41.9413 232.724 47.232C237.161 52.5227 239.38 58.496 239.38 65.152C239.38 70.9547 238.1 75.9893 235.54 80.256C232.98 84.4373 229.524 87.5947 225.172 89.728C220.905 91.8613 216.255 92.928 211.22 92.928C206.1 92.928 201.193 91.904 196.5 89.856C191.807 87.808 187.967 84.864 184.98 81.024C181.993 77.184 180.5 72.6613 180.5 67.456C180.5 65.92 180.841 64.9813 181.524 64.64C182.207 64.2987 183.487 64.128 185.364 64.128H190.996C197.311 64.128 200.767 64.4267 201.364 65.024C201.535 67.4133 202.473 69.2907 204.18 70.656C205.887 71.936 207.849 72.576 210.068 72.576C212.116 72.576 213.865 72.0213 215.316 70.912C216.767 69.7173 217.492 68.0533 217.492 65.92C217.492 62.1653 215.999 59.52 213.012 57.984C210.111 56.448 206.143 55.2533 201.108 54.4C200.937 54.3147 199.615 54.016 197.14 53.504C194.409 52.8213 191.849 51.2853 189.46 48.896C187.156 46.4213 185.279 43.5627 183.828 40.32C182.463 37.0773 181.78 34.048 181.78 31.232C181.78 25.6853 183.017 20.6507 185.492 16.128C187.967 11.52 191.465 7.89334 195.988 5.248C200.511 2.60267 205.801 1.28 211.86 1.28C216.639 1.28 221.161 2.13333 225.428 3.84C229.78 5.54667 233.279 8.14934 235.924 11.648C238.655 15.0613 240.02 19.2427 240.02 24.192C240.02 25.5573 239.849 27.776 239.508 30.848C238.399 31.9573 234.559 32.512 227.988 32.512ZM228.244 31.36C230.463 31.36 233.791 31.0187 238.228 30.336C238.655 27.9467 238.868 25.8133 238.868 23.936C238.868 19.4133 237.545 15.5307 234.9 12.288C232.255 9.04534 228.799 6.61333 224.532 4.992C220.351 3.28533 215.999 2.432 211.476 2.432C206.015 2.432 201.108 3.712 196.756 6.272C192.489 8.74667 189.119 12.16 186.644 16.512C184.255 20.7787 183.06 25.4293 183.06 30.464C183.06 33.1093 183.657 36.0107 184.852 39.168C186.047 42.3253 187.711 45.1413 189.844 47.616C192.063 50.0053 194.537 51.5413 197.268 52.224C198.207 52.48 199.7 52.7787 201.748 53.12C205.247 53.8027 208.148 54.528 210.452 55.296C212.756 55.9787 214.719 57.1733 216.34 58.88C218.047 60.5867 218.9 62.9333 218.9 65.92C218.9 68.3947 218.004 70.3573 216.212 71.808C214.42 73.1733 212.329 73.856 209.94 73.856C207.465 73.856 205.247 73.1307 203.284 71.68C201.321 70.2293 200.255 68.224 200.084 65.664C197.183 65.664 195.007 65.6213 193.556 65.536L186.9 65.408C184.596 65.408 182.889 65.4933 181.78 65.664C181.78 70.9547 183.103 75.5627 185.748 79.488C188.479 83.4133 192.063 86.4 196.5 88.448C201.023 90.496 205.929 91.52 211.22 91.52C215.999 91.52 220.436 90.5387 224.532 88.576C228.628 86.528 231.913 83.5413 234.388 79.616C236.863 75.6053 238.1 70.8267 238.1 65.28C238.1 59.8187 236.521 54.8267 233.364 50.304C230.292 45.7813 226.025 42.1973 220.564 39.552C219.711 39.1253 218.559 38.784 217.108 38.528C215.743 38.1867 214.847 37.9733 214.42 37.888C210.58 37.2053 207.636 36.3093 205.588 35.2C203.625 34.0907 202.644 32.1707 202.644 29.44C202.644 26.7947 203.455 24.7893 205.076 23.424C206.783 21.9733 208.745 21.248 210.964 21.248C213.439 21.248 215.615 21.9733 217.492 23.424C219.455 24.8747 220.436 26.7093 220.436 28.928L220.308 30.208C222.868 30.976 225.513 31.36 228.244 31.36Z"
            fill="white"
          />
          <path
            d="M302.401 90.752L301.889 91.392C299.841 91.904 297.153 92.16 293.825 92.16L285.633 92.032C285.377 92.1173 285.036 92.16 284.609 92.16C284.097 92.16 283.713 92.0747 283.457 91.904C283.286 91.8187 283.158 91.7333 283.073 91.648C282.39 87.04 282.049 80.9813 282.049 73.472C282.049 72.704 282.006 70.528 281.921 66.944C281.836 63.36 281.58 59.9467 281.153 56.704C278.764 56.2773 276.63 56.064 274.753 56.064C272.364 56.064 269.889 56.32 267.329 56.832C266.988 59.2213 266.817 61.952 266.817 65.024C266.817 66.816 266.902 69.5893 267.073 73.344C267.244 77.0987 267.329 79.872 267.329 81.664C267.329 85.248 267.116 88.32 266.689 90.88C266.518 90.88 266.433 90.9653 266.433 91.136C265.238 91.904 263.66 92.288 261.697 92.288C260.588 92.288 258.924 92.1173 256.705 91.776C254.486 91.4347 252.993 91.264 252.225 91.264C251.116 91.264 250.049 91.4773 249.025 91.904C247.574 91.392 246.849 86.5707 246.849 77.44V70.016C246.849 64.128 246.678 55.3813 246.337 43.776C245.996 32.1707 245.825 23.3813 245.825 17.408C245.825 15.104 245.868 11.9893 245.953 8.064C246.038 4.05333 246.124 2.048 246.209 2.048V2.176L246.849 1.408C247.702 1.408 248.513 1.45067 249.281 1.536C250.134 1.62134 251.03 1.664 251.969 1.664L255.681 1.536C257.388 1.36533 258.668 1.28 259.521 1.28C262.166 1.28 263.702 1.664 264.129 2.432C264.556 5.248 264.854 8.27733 265.025 11.52C265.196 14.7627 265.281 16.8107 265.281 17.664C265.452 24.7467 265.836 30.0373 266.433 33.536H266.305L266.689 35.584C268.396 35.9253 270.358 36.096 272.577 36.096C274.881 36.096 277.228 35.8827 279.617 35.456C280.214 27.52 280.513 20.6507 280.513 14.848C280.513 10.8373 280.385 6.784 280.129 2.688C280.897 1.92 282.689 1.28 285.505 0.767998C288.321 0.255999 290.838 0 293.057 0C294.593 0 295.83 0.170667 296.769 0.512001H298.305C298.305 0.512001 298.518 0.725334 298.945 1.152L302.401 90.752ZM296.769 90.624C298.22 90.624 299.67 90.496 301.121 90.24L297.665 1.792C297.068 1.792 296.556 1.74933 296.129 1.664C291.009 1.664 286.102 2.13333 281.409 3.072C281.665 6.912 281.793 10.752 281.793 14.592C281.793 20.6507 281.494 27.776 280.897 35.968C280.47 36.3947 280.257 36.608 280.257 36.608H280.513C279.83 36.608 278.38 36.736 276.161 36.992C274.028 37.248 272.321 37.376 271.041 37.376C268.908 37.376 267.073 36.992 265.537 36.224C264.94 32.384 264.47 26.6667 264.129 19.072C263.788 11.904 263.361 6.528 262.849 2.944C262.252 2.85867 261.356 2.816 260.161 2.816C259.137 2.816 257.601 2.90133 255.553 3.072C253.505 3.24267 252.054 3.328 251.201 3.328C249.75 3.328 248.513 3.15734 247.489 2.816C247.233 8.96 247.105 15.0613 247.105 21.12C247.105 33.8347 247.19 45.0133 247.361 54.656C247.617 64.2133 248.086 73.6 248.769 82.816C248.769 83.9253 248.812 84.7787 248.897 85.376C248.897 87.68 248.982 89.3867 249.153 90.496C250.092 90.24 250.988 90.112 251.841 90.112C252.865 90.112 254.486 90.2827 256.705 90.624C258.753 90.9653 260.332 91.136 261.441 91.136C262.977 91.136 264.3 90.8373 265.409 90.24C265.836 87.68 266.049 84.5227 266.049 80.768L265.921 72.704C265.75 69.12 265.665 66.432 265.665 64.64C265.665 61.4827 265.836 58.6667 266.177 56.192C266.86 55.8507 268.268 55.5093 270.401 55.168C272.534 54.8267 274.668 54.656 276.801 54.656C279.446 54.656 281.238 54.9973 282.177 55.68C282.433 55.936 282.646 57.216 282.817 59.52C282.988 61.824 283.073 63.5733 283.073 64.768C283.073 70.5707 283.116 75.4347 283.201 79.36C283.372 83.2 283.713 87.04 284.225 90.88H284.993C286.102 90.5387 287.596 90.368 289.473 90.368C291.009 90.368 292.204 90.4107 293.057 90.496L296.769 90.624Z"
            fill="white"
          />
          <path
            d="M334.66 1.536C334.66 8.27734 334.617 14.208 334.532 19.328C334.447 24.448 334.361 28.672 334.276 32C333.935 45.4827 333.764 55.6373 333.764 62.464C333.764 73.8133 334.02 83.2853 334.532 90.88C333.764 91.648 332.783 92.16 331.588 92.416C330.393 92.7573 328.9 92.928 327.108 92.928C325.401 92.928 322.927 92.7573 319.684 92.416C318.831 92.3307 317.892 92.2453 316.868 92.16C315.929 92.0747 314.948 92.032 313.924 92.032C312.644 92.032 311.705 92.16 311.108 92.416L309.956 91.904C310.297 85.4187 310.468 78.1653 310.468 70.144C310.468 62.6347 310.34 55.168 310.084 47.744C309.999 45.184 309.913 42.0267 309.828 38.272C309.743 34.432 309.7 29.952 309.7 24.832C309.7 20.5653 309.828 16.256 310.084 11.904C310.425 4.82133 310.937 0.938665 311.62 0.255997C314.009 0.255997 316.399 0.383998 318.788 0.639999C319.641 0.725332 320.665 0.810666 321.86 0.896004C323.055 0.981336 324.463 1.024 326.084 1.024L334.02 0.896004L334.66 1.536ZM332.484 62.592C332.484 55.936 332.527 50.0907 332.612 45.056C332.697 40.0213 332.783 35.84 332.868 32.512C333.209 19.0293 333.38 8.91734 333.38 2.176L325.956 2.304C324.932 2.304 323.695 2.26133 322.244 2.176C320.879 2.09067 319.855 2.00533 319.172 1.92C316.868 1.664 314.564 1.536 312.26 1.536C311.492 8.02133 311.108 15.5307 311.108 24.064C311.108 28.5867 311.151 32.5973 311.236 36.096C311.321 39.5093 311.407 42.3253 311.492 44.544C311.748 51.2853 311.876 58.112 311.876 65.024C311.876 72.704 311.663 81.4507 311.236 91.264C312.431 91.0933 313.497 91.008 314.436 91.008C315.46 91.008 317.337 91.0933 320.068 91.264C322.969 91.4347 325.145 91.52 326.596 91.52C327.535 91.52 328.857 91.3493 330.564 91.008C331.503 90.752 332.399 90.624 333.252 90.624C332.74 83.1147 332.484 73.7707 332.484 62.592Z"
            fill="white"
          />
          <path
            d="M408.704 92.672C408.277 93.5253 405.717 93.952 401.024 93.952C399.147 93.952 397.013 93.824 394.624 93.568C392.235 93.3973 390.784 93.0133 390.272 92.416C389.419 90.4533 388.565 87.3387 387.712 83.072C387.2 80.512 386.688 78.4213 386.176 76.8C385.749 75.0933 385.152 73.472 384.384 71.936C383.701 71.936 382.976 71.8933 382.208 71.808C381.44 71.7227 380.715 71.68 380.032 71.68C379.691 71.8507 379.264 71.936 378.752 71.936L377.216 71.808C376.448 73.4293 375.893 75.3067 375.552 77.44C375.296 79.488 375.125 80.7253 375.04 81.152C374.699 83.7973 374.272 86.0587 373.76 87.936C373.333 89.728 372.651 91.392 371.712 92.928L370.944 93.312H371.072L369.92 93.44L362.24 93.312C357.973 93.1413 354.688 93.056 352.384 93.056L352.256 92.928L352 92.288C352.427 90.8373 352.725 89.0453 352.896 86.912C353.067 85.376 353.237 84.3093 353.408 83.712C358.272 52.9067 364.331 25.984 371.584 2.944L372.224 2.432H372.864C373.376 2.176 376.107 2.048 381.056 2.048C382.251 1.96267 383.445 1.92 384.64 1.92C385.92 1.92 387.029 1.87733 387.968 1.792C388.651 2.56 389.248 4.18133 389.76 6.656C390.357 9.04533 390.699 10.4533 390.784 10.88C391.211 13.0133 391.424 14.08 391.424 14.08C394.752 28.416 399.872 51.584 406.784 83.584L408.704 92.288V92.672ZM401.152 92.672C403.456 92.672 405.504 92.5013 407.296 92.16L399.232 55.424C394.709 35.2 391.68 21.5467 390.144 14.464C390.059 14.0373 389.675 12.544 388.992 9.984C388.139 6.912 387.627 4.608 387.456 3.072C383.445 3.49866 378.539 3.712 372.736 3.712C365.056 28.1173 359.04 54.912 354.688 84.096C354.603 84.7787 354.432 85.9733 354.176 87.68C354.005 89.3013 353.749 90.7093 353.408 91.904C359.04 92.16 363.051 92.288 365.44 92.288C368.085 92.288 369.835 92.2027 370.688 92.032C371.541 90.6667 372.181 89.088 372.608 87.296C373.12 85.4187 373.589 83.2 374.016 80.64C374.699 76.2027 375.467 72.96 376.32 70.912L376.832 70.528H379.52C379.776 70.3573 380.288 70.272 381.056 70.272C381.824 70.272 382.592 70.3573 383.36 70.528C384.128 70.6133 384.811 70.784 385.408 71.04C386.517 73.1733 387.328 75.52 387.84 78.08C388.437 80.64 388.779 82.1333 388.864 82.56C389.632 86.4853 390.4 89.472 391.168 91.52C392.021 91.6053 393.045 91.776 394.24 92.032C395.435 92.2027 396.416 92.3307 397.184 92.416C398.891 92.5867 400.213 92.672 401.152 92.672ZM377.728 56.832C376.704 56.832 375.893 56.5333 375.296 55.936C376.917 37.76 378.581 28.672 380.288 28.672H380.8C382.165 30.2933 383.147 32.896 383.744 36.48C384.427 40.064 384.981 44.5867 385.408 50.048C385.493 50.9867 385.579 51.968 385.664 52.992C385.749 54.016 385.877 55.04 386.048 56.064L385.408 56.704L377.728 56.832ZM379.008 55.68C380.203 55.68 382.08 55.5947 384.64 55.424C383.616 46.8053 382.72 40.2347 381.952 35.712C381.867 35.3707 381.739 34.5173 381.568 33.152C381.397 31.7867 381.056 30.8053 380.544 30.208C379.605 33.1093 378.88 36.096 378.368 39.168C377.941 42.1547 377.515 45.9947 377.088 50.688L376.576 55.552C377.088 55.6373 377.899 55.68 379.008 55.68Z"
            fill="white"
          />
          <path
            d="M462.856 3.584C461.576 18.2613 460.168 32.9813 458.632 47.744C458.205 52.5227 457.523 59.4347 456.584 68.48C455.731 77.44 455.005 85.2907 454.408 92.032C453.896 92.544 453.299 92.8853 452.616 93.056C451.933 93.2267 450.995 93.312 449.8 93.312C448.435 93.312 447.197 93.2267 446.088 93.056C444.979 92.9707 444.04 92.928 443.272 92.928C442.333 92.928 441.48 91.8187 440.712 89.6C439.944 87.296 439.091 84.1387 438.152 80.128C437.043 75.6907 436.189 72.832 435.592 71.552C434.739 72.6613 434.099 74.0267 433.672 75.648C433.245 77.184 432.819 79.2747 432.392 81.92C431.965 84.736 431.539 86.8693 431.112 88.32C430.771 89.7707 430.131 91.0507 429.192 92.16C428.595 92.7573 427.101 93.056 424.712 93.056C423.176 93.056 421 92.928 418.184 92.672C418.184 93.0133 418.099 93.0133 417.928 92.672H417.416L416.776 92.16L415.24 81.792C412.68 64.2133 410.717 49.5787 409.352 37.888C408.072 26.1973 407.432 14.8053 407.432 3.712C408.285 2.85867 410.248 2.432 413.32 2.432L419.976 2.56C421.341 2.64533 423.475 2.688 426.376 2.688C427.229 4.48 427.656 7.424 427.656 11.52C427.656 14.2507 427.571 18.176 427.4 23.296L427.272 34.688C427.272 42.2827 427.869 48.7253 429.064 54.016C429.832 51.2 430.515 48.3413 431.112 45.44C431.283 44.672 431.709 42.7947 432.392 39.808C433.16 36.736 433.885 34.4747 434.568 33.024L434.696 32.896C435.805 33.4933 436.701 34.9013 437.384 37.12C438.067 39.3387 438.835 42.5387 439.688 46.72C440.541 50.816 441.224 53.6747 441.736 55.296C441.992 50.8587 442.205 44.2027 442.376 35.328C442.547 28.3307 442.717 23.04 442.888 19.456L443.272 9.856C443.357 9.25867 443.443 8.10667 443.528 6.4C443.613 4.69334 443.699 3.84 443.784 3.84V3.968L444.168 3.2C445.875 2.60267 448.307 2.304 451.464 2.304L456.968 2.432C457.139 2.432 457.992 2.432 459.528 2.432C461.064 2.34667 462.131 2.60267 462.728 3.2L462.856 3.584ZM453.256 91.52C454.109 81.9627 455.347 68.8213 456.968 52.096C457.309 48.1707 457.949 41.216 458.888 31.232C459.912 21.1627 460.765 12.0747 461.448 3.968C460.168 3.79733 458.205 3.712 455.56 3.712C452.403 3.712 448.904 3.92533 445.064 4.352C444.467 9.64267 444.125 15.232 444.04 21.12C443.955 26.9227 443.912 30.336 443.912 31.36C443.912 42.624 443.528 51.6267 442.76 58.368C442.248 58.5387 441.864 58.624 441.608 58.624C440.413 55.808 439.347 51.8827 438.408 46.848C437.384 41.5573 436.317 37.632 435.208 35.072C432.904 43.008 431.069 50.304 429.704 56.96C429.448 56.8747 429.021 56.832 428.424 56.832C426.973 50.688 426.248 43.008 426.248 33.792L426.376 17.408C426.376 12.4587 426.205 7.97867 425.864 3.968L420.488 3.84C419.293 3.75467 417.459 3.712 414.984 3.712C412.851 3.712 410.76 3.84 408.712 4.096C409.139 17.2373 410.077 30.4213 411.528 43.648C413.064 56.8747 415.197 72.7893 417.928 91.392C418.525 91.392 419.421 91.4773 420.616 91.648C422.323 91.8187 423.56 91.904 424.328 91.904C425.949 91.904 427.272 91.6907 428.296 91.264C428.723 90.496 429.149 89.088 429.576 87.04C430.088 84.992 430.387 83.7547 430.472 83.328C431.325 79.0613 432.136 75.776 432.904 73.472C433.672 71.0827 434.568 69.888 435.592 69.888H435.72C436.659 70.8267 437.427 72.2347 438.024 74.112C438.621 75.904 439.347 78.5067 440.2 81.92C440.797 84.5653 441.309 86.6987 441.736 88.32C442.248 89.856 442.845 90.9653 443.528 91.648C444.211 91.648 445.192 91.7333 446.472 91.904C447.752 91.9893 448.861 92.032 449.8 92.032C451.336 92.032 452.488 91.8613 453.256 91.52Z"
            fill="white"
          />
          <path
            d="M518.704 92.672C518.277 93.5253 515.717 93.952 511.024 93.952C509.147 93.952 507.013 93.824 504.624 93.568C502.235 93.3973 500.784 93.0133 500.272 92.416C499.419 90.4533 498.565 87.3387 497.712 83.072C497.2 80.512 496.688 78.4213 496.176 76.8C495.749 75.0933 495.152 73.472 494.384 71.936C493.701 71.936 492.976 71.8933 492.208 71.808C491.44 71.7227 490.715 71.68 490.032 71.68C489.691 71.8507 489.264 71.936 488.752 71.936L487.216 71.808C486.448 73.4293 485.893 75.3067 485.552 77.44C485.296 79.488 485.125 80.7253 485.04 81.152C484.699 83.7973 484.272 86.0587 483.76 87.936C483.333 89.728 482.651 91.392 481.712 92.928L480.944 93.312H481.072L479.92 93.44L472.24 93.312C467.973 93.1413 464.688 93.056 462.384 93.056L462.256 92.928L462 92.288C462.427 90.8373 462.725 89.0453 462.896 86.912C463.067 85.376 463.237 84.3093 463.408 83.712C468.272 52.9067 474.331 25.984 481.584 2.944L482.224 2.432H482.864C483.376 2.176 486.107 2.048 491.056 2.048C492.251 1.96267 493.445 1.92 494.64 1.92C495.92 1.92 497.029 1.87733 497.968 1.792C498.651 2.56 499.248 4.18133 499.76 6.656C500.357 9.04533 500.699 10.4533 500.784 10.88C501.211 13.0133 501.424 14.08 501.424 14.08C504.752 28.416 509.872 51.584 516.784 83.584L518.704 92.288V92.672ZM511.152 92.672C513.456 92.672 515.504 92.5013 517.296 92.16L509.232 55.424C504.709 35.2 501.68 21.5467 500.144 14.464C500.059 14.0373 499.675 12.544 498.992 9.984C498.139 6.912 497.627 4.608 497.456 3.072C493.445 3.49866 488.539 3.712 482.736 3.712C475.056 28.1173 469.04 54.912 464.688 84.096C464.603 84.7787 464.432 85.9733 464.176 87.68C464.005 89.3013 463.749 90.7093 463.408 91.904C469.04 92.16 473.051 92.288 475.44 92.288C478.085 92.288 479.835 92.2027 480.688 92.032C481.541 90.6667 482.181 89.088 482.608 87.296C483.12 85.4187 483.589 83.2 484.016 80.64C484.699 76.2027 485.467 72.96 486.32 70.912L486.832 70.528H489.52C489.776 70.3573 490.288 70.272 491.056 70.272C491.824 70.272 492.592 70.3573 493.36 70.528C494.128 70.6133 494.811 70.784 495.408 71.04C496.517 73.1733 497.328 75.52 497.84 78.08C498.437 80.64 498.779 82.1333 498.864 82.56C499.632 86.4853 500.4 89.472 501.168 91.52C502.021 91.6053 503.045 91.776 504.24 92.032C505.435 92.2027 506.416 92.3307 507.184 92.416C508.891 92.5867 510.213 92.672 511.152 92.672ZM487.728 56.832C486.704 56.832 485.893 56.5333 485.296 55.936C486.917 37.76 488.581 28.672 490.288 28.672H490.8C492.165 30.2933 493.147 32.896 493.744 36.48C494.427 40.064 494.981 44.5867 495.408 50.048C495.493 50.9867 495.579 51.968 495.664 52.992C495.749 54.016 495.877 55.04 496.048 56.064L495.408 56.704L487.728 56.832ZM489.008 55.68C490.203 55.68 492.08 55.5947 494.64 55.424C493.616 46.8053 492.72 40.2347 491.952 35.712C491.867 35.3707 491.739 34.5173 491.568 33.152C491.397 31.7867 491.056 30.8053 490.544 30.208C489.605 33.1093 488.88 36.096 488.368 39.168C487.941 42.1547 487.515 45.9947 487.088 50.688L486.576 55.552C487.088 55.6373 487.899 55.68 489.008 55.68Z"
            fill="white"
          />
          <path
            d="M583.804 92.928L573.052 93.056C570.663 93.1413 567.121 93.184 562.428 93.184L561.916 92.8C561.489 91.9467 560.209 89.3013 558.076 84.864C556.199 80.5973 554.705 77.44 553.596 75.392C552.316 73.088 550.225 69.8027 547.324 65.536C546.812 64.768 546.343 64.0853 545.916 63.488C545.489 62.8907 545.105 62.336 544.764 61.824C544.423 63.9573 544.252 66.8587 544.252 70.528C544.252 78.1227 544.721 85.0347 545.66 91.264C544.892 92.8 540.796 93.568 533.372 93.568L527.74 93.44C526.631 93.3547 524.967 93.312 522.748 93.312L522.364 92.288L522.236 92.544C522.492 91.008 522.62 88.6613 522.62 85.504C522.62 78.6773 522.535 68.4373 522.364 54.784C522.108 44.6293 521.98 34.432 521.98 24.192V17.28C521.98 11.5627 521.724 6.912 521.212 3.328L521.852 2.56C531.409 0.853333 539.473 0 546.044 0C552.273 0 558.161 1.024 563.708 3.072C569.255 5.03467 573.735 8.14933 577.148 12.416C580.647 16.6827 582.396 21.9733 582.396 28.288C582.396 32.4693 581.543 36.5227 579.836 40.448C578.215 44.288 575.825 47.488 572.668 50.048C569.596 52.5227 565.969 53.888 561.788 54.144C563.068 56.3627 565.799 60.5867 569.98 66.816C573.649 72.2773 576.593 76.8853 578.812 80.64C581.031 84.3947 582.908 88.32 584.444 92.416L583.804 91.904V92.928ZM582.78 91.648C581.073 87.552 579.153 83.712 577.02 80.128C574.887 76.544 571.729 71.5947 567.548 65.28L565.5 62.464C563.964 60.5013 562.769 58.8373 561.916 57.472C561.063 56.1067 560.508 54.8267 560.252 53.632L560.892 52.864C564.988 52.864 568.572 51.6693 571.644 49.28C574.716 46.8907 577.063 43.8187 578.684 40.064C580.305 36.3093 581.116 32.4267 581.116 28.416C581.116 21.8453 579.367 16.5547 575.868 12.544C572.455 8.448 568.188 5.58934 563.068 3.968C558.033 2.26133 552.785 1.408 547.324 1.408C546.129 1.408 544.252 1.49333 541.692 1.664L538.876 1.792H539.132C532.561 2.21867 527.057 2.85867 522.62 3.712C522.791 5.07733 522.876 6.05867 522.876 6.656C522.876 18.6027 523.089 31.9573 523.516 46.72C523.857 64.2987 524.028 77.568 524.028 86.528C524.028 88.4053 523.9 90.24 523.644 92.032C525.777 92.032 527.399 92.0747 528.508 92.16L534.012 92.288C538.279 92.288 541.735 91.8187 544.38 90.88C543.441 83.2 542.972 76.2027 542.972 69.888C542.972 65.792 543.228 62.464 543.74 59.904L544.892 59.648C545.319 60.2453 545.788 60.9707 546.3 61.824C546.897 62.6773 547.537 63.5733 548.22 64.512C551.292 68.9493 553.468 72.4053 554.748 74.88L558.844 83.328C560.295 86.5707 561.617 89.4293 562.812 91.904L572.796 91.776C575.015 91.6907 578.343 91.648 582.78 91.648ZM540.284 20.48C543.441 19.1147 546.471 18.432 549.372 18.432C552.7 18.432 555.345 19.4133 557.308 21.376C559.271 23.3387 560.252 25.728 560.252 28.544C560.252 31.2747 559.399 33.5787 557.692 35.456C556.071 37.248 553.639 38.144 550.396 38.144C548.433 38.144 546.641 38.016 545.02 37.76C542.972 37.5893 541.692 37.504 541.18 37.504C540.241 36.5653 539.772 35.072 539.772 33.024C539.772 32 539.815 31.0187 539.9 30.08C540.071 29.056 540.156 28.2027 540.156 27.52C540.156 27.1787 540.113 26.8373 540.028 26.496C539.943 26.1547 539.9 25.7707 539.9 25.344L540.028 23.04L540.284 20.48ZM549.5 19.84C546.769 19.84 543.996 20.4373 541.18 21.632V22.4C541.351 22.7413 541.436 23.936 541.436 25.984L541.308 32.256C541.308 33.6213 541.436 34.944 541.692 36.224C544.081 36.736 546.513 36.992 548.988 36.992C555.729 36.992 559.1 34.304 559.1 28.928C559.1 27.3067 558.716 25.8133 557.948 24.448C557.265 22.9973 556.284 21.888 555.004 21.12C553.383 20.2667 551.548 19.84 549.5 19.84Z"
            fill="white"
          />
          <path
            d="M612.934 2.688C612.934 9.42934 612.891 15.36 612.806 20.48C612.721 25.6 612.635 29.824 612.55 33.152C612.209 46.6347 612.038 56.7893 612.038 63.616C612.038 74.9653 612.294 84.4373 612.806 92.032C612.038 92.8 611.057 93.312 609.862 93.568C608.667 93.9093 607.174 94.08 605.382 94.08C603.675 94.08 601.201 93.9093 597.958 93.568C597.105 93.4827 596.166 93.3973 595.142 93.312C594.203 93.2267 593.222 93.184 592.198 93.184C590.918 93.184 589.979 93.312 589.382 93.568L588.23 93.056C588.571 86.5707 588.742 79.3173 588.742 71.296C588.742 63.7867 588.614 56.32 588.358 48.896C588.273 46.336 588.187 43.1787 588.102 39.424C588.017 35.584 587.974 31.104 587.974 25.984C587.974 21.7173 588.102 17.408 588.358 13.056C588.699 5.97333 589.211 2.09067 589.894 1.408C592.283 1.408 594.673 1.536 597.062 1.792C597.915 1.87733 598.939 1.96267 600.134 2.048C601.329 2.13334 602.737 2.176 604.358 2.176L612.294 2.048L612.934 2.688ZM610.758 63.744C610.758 57.088 610.801 51.2427 610.886 46.208C610.971 41.1733 611.057 36.992 611.142 33.664C611.483 20.1813 611.654 10.0693 611.654 3.328L604.23 3.456C603.206 3.456 601.969 3.41334 600.518 3.328C599.153 3.24267 598.129 3.15733 597.446 3.072C595.142 2.816 592.838 2.688 590.534 2.688C589.766 9.17333 589.382 16.6827 589.382 25.216C589.382 29.7387 589.425 33.7493 589.51 37.248C589.595 40.6613 589.681 43.4773 589.766 45.696C590.022 52.4373 590.15 59.264 590.15 66.176C590.15 73.856 589.937 82.6027 589.51 92.416C590.705 92.2453 591.771 92.16 592.71 92.16C593.734 92.16 595.611 92.2453 598.342 92.416C601.243 92.5867 603.419 92.672 604.87 92.672C605.809 92.672 607.131 92.5013 608.838 92.16C609.777 91.904 610.673 91.776 611.526 91.776C611.014 84.2667 610.758 74.9227 610.758 63.744Z"
            fill="white"
          />
        </svg>
      </div>
          <h5>web developer & programmer</h5>
          
        </div>
      </div>
    </div>
  );
};

export default Main;
