import { createSlice } from '@reduxjs/toolkit';

const listProductSLiceReducer = createSlice({
    name: 'listProduct',
    initialState: [
        {
            id: 1,
            name: 'Thành phố Hà Nội',
            image: 'https://thanhit2612.github.io/luxstay/assets/imgs/location/location1.png',
            desc: 'Thủ đô hơn 1000 năm tuổi. Không chỉ nổi tiếng với lịch sử lâu đời, giàu bản sắc, văn hóa truyền thống dân tộc, vùng đất này còn được biết đến là một trong những địa điểm thu hút nhiều du khách trong và ngoài nước',
        },
        {
            id: 2,
            name: 'Thành phố Đà Lạt',
            image: 'https://thanhit2612.github.io/luxstay/assets/imgs/location/location4.png',
            desc: 'Được biết đến là thành phố sương mù, Đà Lạt thu hút bởi khí hậu mát mẻ quanh năm, cảnh quan thiên nhiên tuyệt đẹp. Giới thiệu về Đà Lạt giúp du khách hiểu thêm về lịch sử, con người cũng như văn hóa của vùng đất này.',
        },
        {
            id: 3,
            name: 'Thành phố Vũng Tàu',
            image: 'https://thanhit2612.github.io/luxstay/assets/imgs/location/location3.png',
            desc: 'Vũng Tàu từ lâu đã được xem là một điểm đến du lịch hấp dẫn, bởi những vẻ đẹp tự nhiên của mình. Dù đến bất cứ đâu trong chuyến du lịch Vũng Tàu, du khách cũng sẽ bị cuốn hút bởi phong cảnh của nơi đây.',
        },
        {
            id: 4,
            name: 'Tỉnh Quảng Ninh',
            image: 'https://thanhit2612.github.io/luxstay/assets/imgs/location/location7.png',
            desc: 'Quảng Ninh là một địa danh giàu tiềm năng du lịch, là một đỉnh của tam giác tăng trưởng du lịch miền Bắc Việt Nam. Sở hữu danh thắng nổi tiếng là vịnh Hạ Long được UNESCO công nhận là di sản thiên nhiên thế giới và di sản thế giới bởi giá trị địa chất địa mạo',
        },
        {
            id: 5,
            name: 'Thành phố Hội An',
            image: 'https://thanhit2612.github.io/luxstay/assets/imgs/location/location8.png',
            desc: 'Không chỉ được đắm mình trong vẻ đẹp bình dị của phố cổ, du lịch Hội An bạn còn được khám phá sự giao thoa giữa các nền văn hóa phương Đông đến từ Nhật Bản, Trung Quốc và văn hóa Việt. Bởi Hội An vốn là thương cảng đông đúc tồn tại dưới triều Nguyễn cách đây khoảng 200 năm.',
        },
    ],
    reducers: {
        addProduct: (state, action) => {
            state = state.push(action.payload);
        },
        deleteProduct: (state, action) => {
            const index = state.findIndex((x) => x.id === action.payload);
            if (index !== -1) state = state.splice(index, 1);
        },
    },
});

export default listProductSLiceReducer;

export const { addProduct, deleteProduct } = listProductSLiceReducer.actions;
