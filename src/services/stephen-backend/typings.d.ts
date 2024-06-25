declare namespace API {
  type BaseResponseBoolean_ = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseGoodsVO_ = {
    code?: number;
    data?: GoodsVO;
    message?: string;
  };

  type BaseResponseLoginUserVO_ = {
    code?: number;
    data?: LoginUserVO;
    message?: string;
  };

  type BaseResponseLong_ = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponseOrderItemVO_ = {
    code?: number;
    data?: OrderItemVO;
    message?: string;
  };

  type BaseResponseOrderVO_ = {
    code?: number;
    data?: OrderVO;
    message?: string;
  };

  type BaseResponsePageGoods_ = {
    code?: number;
    data?: PageGoods_;
    message?: string;
  };

  type BaseResponsePageGoodsVO_ = {
    code?: number;
    data?: PageGoodsVO_;
    message?: string;
  };

  type BaseResponsePageOrder_ = {
    code?: number;
    data?: PageOrder_;
    message?: string;
  };

  type BaseResponsePageOrderItem_ = {
    code?: number;
    data?: PageOrderItem_;
    message?: string;
  };

  type BaseResponsePageOrderItemVO_ = {
    code?: number;
    data?: PageOrderItemVO_;
    message?: string;
  };

  type BaseResponsePageOrderVO_ = {
    code?: number;
    data?: PageOrderVO_;
    message?: string;
  };

  type BaseResponsePageType_ = {
    code?: number;
    data?: PageType_;
    message?: string;
  };

  type BaseResponsePageTypeVO_ = {
    code?: number;
    data?: PageTypeVO_;
    message?: string;
  };

  type BaseResponsePageUser_ = {
    code?: number;
    data?: PageUser_;
    message?: string;
  };

  type BaseResponsePageUserVO_ = {
    code?: number;
    data?: PageUserVO_;
    message?: string;
  };

  type BaseResponseSearchVO_ = {
    code?: number;
    data?: SearchVO;
    message?: string;
  };

  type BaseResponseString_ = {
    code?: number;
    data?: string;
    message?: string;
  };

  type BaseResponseTypeVO_ = {
    code?: number;
    data?: TypeVO;
    message?: string;
  };

  type BaseResponseUser_ = {
    code?: number;
    data?: User;
    message?: string;
  };

  type BaseResponseUserVO_ = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type DeleteRequest = {
    id?: number;
  };

  type getGoodsVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getOrderItemVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getOrderVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getTypeVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type Goods = {
    content?: string;
    createTime?: string;
    goodsCover?: string;
    goodsImage1?: string;
    goodsImage2?: string;
    goodsName?: string;
    id?: number;
    isDelete?: number;
    price?: number;
    stock?: number;
    typeId?: number;
    updateTime?: string;
    userId?: number;
  };

  type GoodsAddRequest = {
    content?: string;
    goodsCover?: string;
    goodsImage1?: string;
    goodsImage2?: string;
    goodsName?: string;
    price?: number;
    stock?: number;
    typeId?: number;
    userId?: number;
  };

  type GoodsEditRequest = {
    content?: string;
    goodsCover?: string;
    goodsImage1?: string;
    goodsImage2?: string;
    goodsName?: string;
    id?: number;
    price?: number;
    stock?: number;
    typeId?: number;
  };

  type GoodsQueryRequest = {
    content?: string;
    current?: number;
    goodsCover?: string;
    goodsImage1?: string;
    goodsImage2?: string;
    goodsName?: string;
    id?: number;
    pageSize?: number;
    price?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    stock?: number;
    typeId?: number;
    userId?: number;
  };

  type GoodsUpdateRequest = {
    content?: string;
    goodsCover?: string;
    goodsImage1?: string;
    goodsImage2?: string;
    goodsName?: string;
    id?: number;
    price?: number;
    stock?: number;
    typeId?: number;
  };

  type GoodsVO = {
    content?: string;
    createTime?: string;
    goodsCover?: string;
    goodsImage1?: string;
    goodsImage2?: string;
    goodsName?: string;
    id?: number;
    price?: number;
    stock?: number;
    typeId?: number;
    updateTime?: string;
    userVO?: UserVO;
  };

  type LoginUserVO = {
    createTime?: string;
    id?: number;
    updateTime?: string;
    userAvatar?: string;
    userEmail?: string;
    userName?: string;
    userPhone?: string;
    userProfile?: string;
    userRole?: string;
  };

  type Order = {
    address?: string;
    amount?: number;
    createTime?: string;
    dateTime?: string;
    id?: number;
    isDelete?: number;
    payType?: number;
    status?: number;
    total?: number;
    updateTime?: string;
    userId?: number;
    userName?: string;
    userPhone?: string;
  };

  type OrderAddRequest = {
    address?: string;
    amount?: number;
    dateTime?: string;
    payType?: number;
    status?: number;
    total?: number;
    userId?: number;
    userName?: string;
    userPhone?: string;
  };

  type OrderEditRequest = {
    address?: string;
    amount?: number;
    dateTime?: string;
    id?: number;
    payType?: number;
    status?: number;
    total?: number;
    userId?: number;
    userName?: string;
    userPhone?: string;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type OrderItem1 = {
    createTime?: string;
    goodsAmount?: number;
    goodsId?: number;
    goodsPrice?: number;
    id?: number;
    isDelete?: number;
    orderId?: number;
    updateTime?: string;
  };

  type OrderItemAddRequest = {
    goodsAmount?: number;
    goodsId?: number;
    goodsPrice?: number;
    orderId?: number;
  };

  type OrderItemEditRequest = {
    goodsAmount?: number;
    goodsId?: number;
    goodsPrice?: number;
    id?: number;
    orderId?: number;
  };

  type OrderItemQueryRequest = {
    current?: number;
    goodsAmount?: number;
    goodsId?: number;
    goodsPrice?: number;
    id?: number;
    orderId?: number;
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type OrderItemUpdateRequest = {
    goodsAmount?: number;
    goodsPrice?: number;
    id?: number;
  };

  type OrderItemVO = {
    createTime?: string;
    goodsVO?: GoodsVO;
    id?: number;
    orderItemAmount?: number;
    orderItemPrice?: number;
    orderVO?: OrderVO;
    updateTime?: string;
  };

  type OrderQueryRequest = {
    address?: string;
    amount?: number;
    current?: number;
    dateTime?: string;
    id?: number;
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    total?: number;
    userId?: number;
    userName?: string;
    userPhone?: string;
  };

  type OrderUpdateRequest = {
    address?: string;
    amount?: number;
    dateTime?: string;
    id?: number;
    payType?: number;
    status?: number;
    total?: number;
    userName?: string;
    userPhone?: string;
  };

  type OrderVO = {
    address?: string;
    amount?: number;
    createTime?: string;
    dateTime?: string;
    id?: number;
    payType?: number;
    status?: number;
    total?: number;
    updateTime?: string;
    userName?: string;
    userPhone?: string;
    userVO?: UserVO;
  };

  type PageGoods_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Goods[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageGoodsVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: GoodsVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageOrder_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Order[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageOrderItem_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: OrderItem1[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageOrderItemVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: OrderItemVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageOrderVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: OrderVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageType_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Type[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageTypeVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: TypeVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUser_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: User[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type SearchRequest = {
    current?: number;
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    type?: string;
  };

  type SearchVO = {
    dateList?: GoodsVO[];
  };

  type Type = {
    createTime?: string;
    id?: number;
    isDelete?: number;
    typeName?: string;
    updateTime?: string;
  };

  type TypeAddRequest = {
    id?: number;
    typeName?: string;
  };

  type TypeEditRequest = {
    id?: number;
    typeName?: string;
  };

  type TypeQueryRequest = {
    current?: number;
    id?: number;
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    typeName?: string;
  };

  type TypeUpdateRequest = {
    id?: number;
    typeName?: string;
  };

  type TypeVO = {
    createTime?: string;
    id?: number;
    typeName?: string;
    updateTime?: string;
  };

  type uploadFileUsingPOSTParams = {
    biz?: string;
  };

  type User = {
    createTime?: string;
    id?: number;
    isDelete?: number;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userEmail?: string;
    userName?: string;
    userPassword?: string;
    userPhone?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserAddRequest = {
    userAccount?: string;
    userAvatar?: string;
    userEmail?: string;
    userName?: string;
    userPhone?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    current?: number;
    id?: number;
    mpOpenId?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    unionId?: string;
    userEmail?: string;
    userName?: string;
    userPhone?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserRegisterRequest = {
    checkPassword?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type UserUpdateMyRequest = {
    userAvatar?: string;
    userEmail?: string;
    userName?: string;
    userPhone?: string;
    userProfile?: string;
  };

  type UserUpdateRequest = {
    id?: number;
    userAvatar?: string;
    userEmail?: string;
    userName?: string;
    userPhone?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserVO = {
    createTime?: string;
    id?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };
}
