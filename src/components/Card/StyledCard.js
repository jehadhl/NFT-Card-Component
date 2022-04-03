import styled from "styled-components";
import img from '../../assets/img/image-equilibrium.jpg'
import { colors, FontSize, FontWidth } from "../../assets/style/varaible";


export const Card = styled.section`
width:100%;
max-width:300px;
height:500px;
padding:20px;
background-color: ${colors.VeryDarkBlueCardBG};
border-radius:8px;




    .card-img{
        width:100%;
        height:53%;
        background-image:url(${img});
        background-position: center center;
        background-repeat:no repeat;
        background-size:cover;
        border-radius:8px;
        overflow:hidden;

        &:hover{
            .card-img-visible{
                visibility:visible;
                opacity:1;
                transform:translateY(0px);
                background-color:${colors.CyanHover};

            }
            
        }


        .card-img-visible{
            visibility:hidden;
            cursor:pointer;
            opacity:0;
            transform:translateY(100px);
            transition:0.2s;
            display:flex;
            align-items: center;
            justify-content:center;
            width:100%;
            height:100%;
        }
    }

    .card-text{
        margin:20px 0;


        h3{
            color:${colors.White};
            font-weight:${FontWidth.semiBold};
            font-size:${FontSize.large};
            margin-bottom:15px;
            transition:0.2s;
            cursor:pointer;

            &:hover{
                color:${colors.Cyan};
            }
        }

        p{
            font-size:${FontSize.medium};
            color:${colors.SoftBlue}
        }
    }

    .Card-info-row{
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom:15px;

        .Card-info-box-left{
            color:${colors.Cyan};
            align-items: center;
            display:flex;
            justify-content:center;

            span{
                padding-left:5px;
            }
        }

        .Card-info-box-right{
            color:${colors.SoftBlue};
            align-items: center;
            display:flex;
            justify-content: center;

            span{
                padding-left:5px;

                
            }
        }
    }




  .Card-footer{
      display:flex;
      gap:15px;
      align-items:center;
      
      border-top:1px solid ${colors.VeryDarkBlueLine};
      margin:20px 0 0 0;
      padding:20px 0;


      .avatar{
         width:30px;
         height:30px;
         border-radius:50%;
         border:1px solid ${colors.White};

        img{
            width:100%; 
        }
      }
      p{
        font-size:${FontSize.small};
        color:${colors.SoftBlue};
       

        span{
            color:${colors.White};
            transition:0.2s;
            cursor:pointer;

            &:hover{
                color:${colors.Cyan};
            }
        }
         
     }
  }


`