import ImageViewByCluster from "@/components/ImageResultView/ImageViewByCluster/ImageViewByCluster";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ImageViewByCluster> = {
  component: ImageViewByCluster,
  args: {
    clusters: [
      {
        cluster_name: "L29_V011/006174",
        url: "https://youtube.com/watch?v=RilnkY0S9Ik",
        image_list: [
          {
            id: "L29_V011/006174",
            path: "L29/",
            time_in_seconds: 246960.0,
          },
        ],
      },
      {
        cluster_name: "L28_V011/007020",
        url: "https://youtube.com/watch?v=1uRzTNscALU",
        image_list: [
          {
            id: "L28_V011/007020",
            path: "L28/",
            time_in_seconds: 280800.0,
          },
        ],
      },
      {
        cluster_name: "L04_V008/014468",
        url: "https://youtube.com/watch?v=1XDS7L2KSC4",
        image_list: [
          {
            id: "L04_V008/014468",
            path: "L04/",
            time_in_seconds: 578720.0,
          },
        ],
      },
      {
        cluster_name: "L21_V028/010418",
        url: "https://youtube.com/watch?v=YiF5LpNRak4",
        image_list: [
          {
            id: "L21_V028/010418",
            path: "L21/",
            time_in_seconds: 347266.0,
          },
        ],
      },
      {
        cluster_name: "L04_V008/014426",
        url: "https://youtube.com/watch?v=1XDS7L2KSC4",
        image_list: [
          {
            id: "L04_V008/014426",
            path: "L04/",
            time_in_seconds: 577040.0,
          },
        ],
      },
      {
        cluster_name: "L29_V011/006244",
        url: "https://youtube.com/watch?v=RilnkY0S9Ik",
        image_list: [
          {
            id: "L29_V011/006244",
            path: "L29/",
            time_in_seconds: 249760.0,
          },
        ],
      },
      {
        cluster_name: "L05_V021/006439",
        url: "https://youtube.com/watch?v=A7qCVSEDlNg",
        image_list: [
          {
            id: "L05_V021/006439",
            path: "L05/",
            time_in_seconds: 257560.0,
          },
        ],
      },
      {
        cluster_name: "L04_V008/014447",
        url: "https://youtube.com/watch?v=1XDS7L2KSC4",
        image_list: [
          {
            id: "L04_V008/014447",
            path: "L04/",
            time_in_seconds: 577880.0,
          },
        ],
      },
      {
        cluster_name: "L29_V013/010447",
        url: "https://youtube.com/watch?v=dkfc-Bd3dac",
        image_list: [
          {
            id: "L29_V013/010447",
            path: "L29/",
            time_in_seconds: 417880.0,
          },
        ],
      },
      {
        cluster_name: "L04_V012/005335",
        url: "https://youtube.com/watch?v=f3kSwsy_ZaE",
        image_list: [
          {
            id: "L04_V012/005335",
            path: "L04/",
            time_in_seconds: 213400.0,
          },
        ],
      },
      {
        cluster_name: "L27_V011/004454",
        url: "https://youtube.com/watch?v=MS5NPYXl6F4",
        image_list: [
          {
            id: "L27_V011/004454",
            path: "L27/",
            time_in_seconds: 178160.0,
          },
        ],
      },
      {
        cluster_name: "L30_V075/003250",
        url: "https://youtube.com/watch?v=IEZtrkG794I",
        image_list: [
          {
            id: "L30_V075/003250",
            path: "L30/",
            time_in_seconds: 130000.0,
          },
        ],
      },
      {
        cluster_name: "L22_V020/012061",
        url: "https://youtube.com/watch?v=60qHcTBp6VY",
        image_list: [
          {
            id: "L22_V020/012061",
            path: "L22/",
            time_in_seconds: 402033.0,
          },
        ],
      },
      {
        cluster_name: "L30_V075/003240",
        url: "https://youtube.com/watch?v=IEZtrkG794I",
        image_list: [
          {
            id: "L30_V075/003240",
            path: "L30/",
            time_in_seconds: 129600.0,
          },
        ],
      },
      {
        cluster_name: "L27_V011/004536",
        url: "https://youtube.com/watch?v=MS5NPYXl6F4",
        image_list: [
          {
            id: "L27_V011/004536",
            path: "L27/",
            time_in_seconds: 181440.0,
          },
        ],
      },
      {
        cluster_name: "L27_V011/005075",
        url: "https://youtube.com/watch?v=MS5NPYXl6F4",
        image_list: [
          {
            id: "L27_V011/005075",
            path: "L27/",
            time_in_seconds: 203000.0,
          },
        ],
      },
      {
        cluster_name: "L01_V020/008583",
        url: "https://youtube.com/watch?v=_wU0VqwgTs0",
        image_list: [
          {
            id: "L01_V020/008583",
            path: "L01/",
            time_in_seconds: 343320.0,
          },
        ],
      },
      {
        cluster_name: "L30_V075/003261",
        url: "https://youtube.com/watch?v=IEZtrkG794I",
        image_list: [
          {
            id: "L30_V075/003261",
            path: "L30/",
            time_in_seconds: 130440.0,
          },
        ],
      },
      {
        cluster_name: "L21_V028/010403",
        url: "https://youtube.com/watch?v=YiF5LpNRak4",
        image_list: [
          {
            id: "L21_V028/010403",
            path: "L21/",
            time_in_seconds: 346766.0,
          },
        ],
      },
      {
        cluster_name: "L28_V011/007559",
        url: "https://youtube.com/watch?v=1uRzTNscALU",
        image_list: [
          {
            id: "L28_V011/007559",
            path: "L28/",
            time_in_seconds: 302360.0,
          },
        ],
      },
      {
        cluster_name: "L22_V020/011747",
        url: "https://youtube.com/watch?v=60qHcTBp6VY",
        image_list: [
          {
            id: "L22_V020/011747",
            path: "L22/",
            time_in_seconds: 391566.0,
          },
        ],
      },
      {
        cluster_name: "L27_V011/012998",
        url: "https://youtube.com/watch?v=MS5NPYXl6F4",
        image_list: [
          {
            id: "L27_V011/012998",
            path: "L27/",
            time_in_seconds: 519920.0,
          },
        ],
      },
      {
        cluster_name: "L27_V011/004448",
        url: "https://youtube.com/watch?v=MS5NPYXl6F4",
        image_list: [
          {
            id: "L27_V011/004448",
            path: "L27/",
            time_in_seconds: 177920.0,
          },
        ],
      },
      {
        cluster_name: "L29_V011/006209",
        url: "https://youtube.com/watch?v=RilnkY0S9Ik",
        image_list: [
          {
            id: "L29_V011/006209",
            path: "L29/",
            time_in_seconds: 248360.0,
          },
        ],
      },
      {
        cluster_name: "L29_V011/006210",
        url: "https://youtube.com/watch?v=RilnkY0S9Ik",
        image_list: [
          {
            id: "L29_V011/006210",
            path: "L29/",
            time_in_seconds: 248400.0,
          },
        ],
      },
      {
        cluster_name: "L04_V012/005362",
        url: "https://youtube.com/watch?v=f3kSwsy_ZaE",
        image_list: [
          {
            id: "L04_V012/005362",
            path: "L04/",
            time_in_seconds: 214480.0,
          },
        ],
      },
      {
        cluster_name: "L27_V011/010322",
        url: "https://youtube.com/watch?v=MS5NPYXl6F4",
        image_list: [
          {
            id: "L27_V011/010322",
            path: "L27/",
            time_in_seconds: 412880.0,
          },
        ],
      },
      {
        cluster_name: "L30_V075/003229",
        url: "https://youtube.com/watch?v=IEZtrkG794I",
        image_list: [
          {
            id: "L30_V075/003229",
            path: "L30/",
            time_in_seconds: 129160.0,
          },
        ],
      },
      {
        cluster_name: "L30_V075/003271",
        url: "https://youtube.com/watch?v=IEZtrkG794I",
        image_list: [
          {
            id: "L30_V075/003271",
            path: "L30/",
            time_in_seconds: 130840.0,
          },
        ],
      },
      {
        cluster_name: "L15_V029/010404",
        url: "https://youtube.com/watch?v=qqRCgPBgVFU",
        image_list: [
          {
            id: "L15_V029/010404",
            path: "L15/",
            time_in_seconds: 346800.0,
          },
        ],
      },
      {
        cluster_name: "L30_V075/005005",
        url: "https://youtube.com/watch?v=IEZtrkG794I",
        image_list: [
          {
            id: "L30_V075/005005",
            path: "L30/",
            time_in_seconds: 200200.0,
          },
        ],
      },
      {
        cluster_name: "L21_V028/010387",
        url: "https://youtube.com/watch?v=YiF5LpNRak4",
        image_list: [
          {
            id: "L21_V028/010387",
            path: "L21/",
            time_in_seconds: 346233.0,
          },
        ],
      },
      {
        cluster_name: "L30_V075/005015",
        url: "https://youtube.com/watch?v=IEZtrkG794I",
        image_list: [
          {
            id: "L30_V075/005015",
            path: "L30/",
            time_in_seconds: 200600.0,
          },
        ],
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof ImageViewByCluster>;

export const Default: Story = {};
