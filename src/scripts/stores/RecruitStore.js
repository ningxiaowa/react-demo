'use strict';

import { Store } from 'geiger';

export default class RecruitStore extends Store {

    constructor() {
        super();
        this.departments =
            [
                {
                    "id": "01",
                    "title": "工程研发部门",
                    "count": "120",
                    "posts": [
                        {
                            "id": "0101",
                            "title": "Mac开发工程师",
                            "count": "90"
                        },
                        {
                            "id": "0102",
                            "title": "iOS测试工程师",
                            "count": "10"
                        },
                        {
                            "id": "0103",
                            "title": "Web前端工程师",
                            "count": "20"
                        }
                    ]
                },
                {
                    "id": "02",
                    "title": "产品设计部门",
                    "count": "136",
                    "posts": [
                        {
                            "id": "0201",
                            "title": "网页设计师",
                            "count": "100"
                        },
                        {
                            "id": "0202",
                            "title": "GUI设计师",
                            "count": "30"
                        },
                        {
                            "id": "0203",
                            "title": "平面设计师",
                            "count": "6"
                        }
                    ]
                },
                {
                    "id": "03",
                    "title": "行政部门",
                    "count": "47",
                    "posts": [
                        {
                            "id": "0301",
                            "title": "前台",
                            "count": "20"
                        },
                        {
                            "id": "0302",
                            "title": "财务",
                            "count": "17"
                        },
                        {
                            "id": "0303",
                            "title": "秘书",
                            "count": "10"
                        }
                    ]
                }
            ];
        this.labels =
            [
                {
                    "id": "01",
                    "title": "北京",
                    "count": "82"
                },
                {
                    "id": "02",
                    "title": "上海",
                    "count": "47"
                },
                {
                    "id": "03",
                    "title": "清华大学",
                    "count": "28"
                },
                {
                    "id": "04",
                    "title": "Facebook",
                    "count": "6"
                }
            ];
    }

    // Public API

    getDepartments() { return this.departments; }
    getLabels() { return this.labels; }
}
