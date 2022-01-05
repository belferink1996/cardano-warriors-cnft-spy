const ADA_SYMBOL = '₳'
const ADA_ADDRESS = 'addr1q9mhs29gal2k68pzyq7gvu0g3wjdeacd68f8xacdcj9np4tpn3qr4wtvgajw9jc5a30qda8rhd4d2ksx4h3lrn8qtdqsnpvrt5'
const ADA_ADDRESS_QR = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAAXNSR0IArs4c6QAAEAlJREFUeF7tndt24koMRMn5/2+enGWDcV9U2qUGEiaTPMzDgPuikkoluW0+LpfL52Xh7/PzetnHx8f27+ow9szHDMe8dOF1XfEfjZFd247YjnNcM449jtXbzVufu55otGVknIUSCCufEzjHmL8AXy2x+fkei73htv+JI2D01Mhzx6uVd49gOE6zfWcb/79bhCrA1Tq3Ocd53KgbHbJ1IjVGZX2Kpch+/bo+Lx8f/93/6x7B1cggI7WT0gIzMEajuvO+L8BX93fWpwKAmK91vAng48ORuw/DbpHTRnwEHuUjBVKYr250QLmMxswcmNZ7GNQJApUamJ1OixMbVOaQALuRswpwRLMKxFPMnatyAb2v78+nyjpTNKk8/lqA571ZKayJxMiJHgY4Moabd0gQRSqVoom820kdmaNF1ytl7czl2M9NYb8AD7R0Gu5PJypTgBsFGTlT1bn/GoAzb40MEdVnpGYjBawiulI7Us6rUDZFGznAVrx8bumk+aMxRxtYIsvNwZGicxek5sioW4kVxzmU+nwrgKeS9WgmzeUdYbRrl6MF5QiIVuywKtT1ZrVsiuZVAoT+fyUylGNE/0/iz3WySv4ex0wjmDZTiU7aLNFVJLKq0VYpjyq0TkBV7NSmnnncs3FRDcIugglYooMMDLXZigM8OkYLnjuvO2ekDVbnqLIk4fZ4L/q/TRX0rU7XMK4Rsk27Y0iAG1Gzuu63BvjTjXvhKk6pUKlNo9wTGTAUd5fL5U93l6txvKC97nawjrkcUxE1V8SgMx9G8PcDzDc2XICzSLqD1FS8/yTAFG1EYyoCM09zvJrKI4oc8vT2c2c9uTA6R6s6kePM7vr2mxpjBH8NwH3qdxb8C/DpNI69jm+jyKI8UCktlCCqRNd94cmJjSwaW8E25lY32sgm0Rwqj0dzjv+n7q9TZbOvg87a6M309zUdkH4BHg9WzF2qqGIYbeuy7IMAX6f9jeDYtQmEkYmcpg6xV5TG7AgmIKNIp01Sy9JhhXEOlavnsT4un5/bXSTtpDRWBRQVhWw3hCg9goRX0yZVbqkYzslpjcSwbu2RQ1bUKjmqQ6vrALObZ6lvAtjtDGV0Qbl2M9g28diUUKIhE0YZ1SknqznUuaqsFJN2Gzp9FcZxgytzgRcAPFOfkvW0gYgCK2q0Azg42sKx0X9jCeDh9Oe3AexG7rnAq8VmkOqHx7ZI/tiOTG3eDn+uU6w0PiiyFTjRkisNoZFpxnXsBx2DgwDjAchwHeP9YFrYigcqGiUQslMflBdp7MgY7wrwvhfjpEcJYBVIZIT2uooztNexspzryaeIGCE5KcVkIoscMdMyYzpacVr7VKXKfWmCH7pNRK/ZHBV6zAyuhFe2j+8AuPU1Sp+WyCLl69Is5VAyPn3uRoRkoORuklNabeO6jtp+V63H6QXQd7LPZQQrKqYc/TyATzWe0f4Ks5Cz0h7eEeC27Ozspe4Hu0A6Xr8fA910QnaDIDhZEeVl5a3OOh4FzmE5N9oqjvnInqfbheTdKh85OYxAyCKDjEtjz+ubFRVFJq0hTC/DraCqllgRcGEEVxVvv9lYfjoGoZw7AkPeTCBFjkhO64gsWicxYmv/6npUUO62PSj6MYDj+H0pwMPDZCslhKJJijKi4chp3x7gSv07etQIPwm4LD+R8TNvdtdFYETuTCmCnD26nmxObFaKYJqssulvB/h2A0A5Xg1g7+DD2wBMQB79T1Kk2+e0KZW3KhE8ftehapWnKddmUUrXKntl/WQ1H+Xovbd/m3DKwQRwOyndTK4DvL1b4nyyLloLbXq/YdEcxM+oL6b7U/Y6zkJ53LXnyl5VymnHkhitemQn0aFVqRygko8IhExVH5uniCAQI7ZyrlHXUWC4+X7PwerQ3bcCHORIyttEuyv0SuIwKm1IBDrVypcD7Ly2qDXGQXK0me+OYDfKnO+RgxGdZs7iMky3zuPlNaoOdjalhMNqtGXCLaPaiuDbaUu8Y4vUc1b/Um1Mn9erEPVYad86k42OLwFYlCvRZv9GgHdTD6+BItGVaRiqGEInGXMw0aZjaDeCR9qi3OMIuKj0kndaxHkp0h9RNMocf1M5tDdHI7gpry1lxaG7OfxJrXY5+PYIZ2TsVjl+FcDRnBFVr1J3OxalLZqjwl4UjPu61MNnTqSS4UiFzsKjP8jn0JWire7a5ohuloMVOBQ5kXOvAKnsVQmuEZMvBDi+gR95f6Xo/wV4dsuu0UGPj1I+VWIsmHZ6g22lYD/H0w+Mu7R7dLuUc1SEkJtmsAMXHIYg21NeTymagKOCXtHdCu06Y7mGzhijUsrQK5NdWs1S4eMAX3vSw2vV4t6W4y2Uw6rqdDcSNLzdMe8OkDwyQ82KDDSyj1tjR7pG3ZBwgozuF9wxow1kFEqCw1GDynmqALcGZPEUP70ROQLZZwlgqKGXAHZpIaNNN7dKSjTeiMPg6BV2e2wemSFn6dTyoCgox46rcSk8ckhimi4NqkYHLeilAAeDk0Hcsi6iQGSY5F3Td+qHQwRkT7fRkT2VGVYfdDeJovHIkVlpQ6rUoRplIKWEK8KMBCXN/UiUtc6lbtLQXq4Psp8/E5BG8KrB3gbgQn97NBw54qjUO8oWL2Aj543YA4NqWHjGXvJc9LiZcm7Oy9V9+OpGMoGkHDMDDal5aLkaW8I7VQ5bULlG+b79/HUAE6/8hQAbW7oCnDzq+eUA090kiozIm1yVt1I6VKM+LGmGR2k0O/EZMQLdjcZ2Ddoufa5Vqr/LwccPY1Hu7QxVfI5Iee23AdzmyyDaVK51c3Rv4Ov5RnVt1MRw7WIB/E9GsPlGWhJIFL2tzqhomKcCTG+b1RQT/4JXtGkSBcpQFTquNCmUgKw2TyJaVXuh9WWpbhyTHO/FImvWmj8DYP00olMRfDvAVe91akgCNhcg/Y8skvpUtObQ6NEooNybMYoLoJM3nTVnJWPHLKtPF5YAHpyfGvORodUhdZduM6OR0Z026NsCTK1K15ta7943OzXx9a+HVHKtq/bPRDE/HEaCp5pHs2haGYv26H6+p46XARycP6bOketMLj1F5UpWspCjZZHuRHm7HmINx2mcOeWrDEm5ZRRNMt+l1YpKpZQxMczggK00jB3xsaNCrk1aweYAmDlsGMHPoC93MySMvg7g+McpK40N2jN9HrHNUwB2H12p0OuzBEfWvnPpPFr39f/mU565qtePvFSiLnQa8Z5O18GyQLEfXRmfux1pNnozm6bia4+X8tBrAfZer59F1krUVRjyKQC7Iovq5GwxbmRk6rDiDG1EOZGuqJDmrJReo7OTZlhhhZCtToB7vUWbc2vZaKEk4CKDu+uJDEknC/86gNsNtTd+op8ZVK8TdjxsoijxoJXydOUkc7nSv2S83d/xPopKf5YAdceKWMtlK4fxCAPqFHYqmhQb5YOsDFkDOGYUShUjzUcRvQawfneHm6cdNsvSC7FYtHf5MlInd03fIS68XeDSu9P7JS+miKJ8HZ1irERu7pD6eS1aV2v7lA0cijZxs33iDnCQM6JomHJ24Qc9HgM4P/juRC4xjkPVZP8SwDlKM03lx2b7csiNtmgNRE+UYpwxyUMdZ1lRy0p0EtNRazXMwbRJtQGHth4BuH25V0RfvwDHyD38MtLMIQjQ+dr1UyIEMIlEVwBRbqR5VlqWo3gqtXiX7gcnB9WcHFo1QuRElNvGa2jOnwnw9nNFt52/0mBVY8+5jo8BhRHcqJMcYI85nEdL1DzjtZRfT4c7N+H2Dc41JACPtKCEAH0viz4lnCjasht31KTIlC85+Wng/rz0NibV1q6QaseS14ifSAh1kHs36Z0AruR9pwwhcOac980AD8d+syDDRgdtnsoCyyOHZ4Ac+a825Qg7t9yhsaLu3b6u5PnmDAx+LUT+pEV6s4GAJOpzuk5EU46zUD4nUJ4hpiJbUVoh+zmpjMawAB6NTImdyhMnPzmlw/SdYhdsBoCFm3KmyInGnw4iu6W0Kt6l6abJdn0TRf81AIMR9k3uu9t+q/jz/lvFnL91YzBzZgKUGDITf2rNJAp3thpFFilbogk24PkNKhVkjgsePaV1RwYco8jNzRU69YEN2sC3iWhvGSZvBnB8+C0SauRoGVjk+ZRPXwPwOaq3t/mHuCPaXz4XfTeg87N1whOJelpDO3m6FVAqx0XHYynXUgRl7JAxmtInbtRbgtI9k6USvCOyMkHhREMLXIXWo8h3wHDnOISVM2YTn7smON4+lylyL5JnC3aBoXKwihjl7bVNXr/tGrIduypmnJJG77W/H3ys4+NjPhWa22tuN2aRTSnEweC+1l+A5/PObuQ4KaQCxtXrL5f9iHLzRyyZduse/XnZ06vPRakJnZxx7qt/fFTlwZH+3Vzd0r4CAcdqEnrW6HEYKGLAiK2iPnzGHg//vOxLAB7e0bjNUb3hT/T/FIAbVL4K4IjaU4DVmSyKmIx6yPOp3ow+r+alLMd14NOBp+QFKtkc/Wf6/lfmGFUMRjbbnfifB9hAaaUuTh2seZHplwFM+8zzan6Geb52KxM+LtsrhKK/FeVL63eobUw3K8C61YfNMMEXS3W5qoMzCo4EQVVIVHLg9t3KplywVaqgFJKN/zYAHzqGAW5rQe8OjCNw3gbg5LWDj0bwZi3FUl8TwceRHectm7cVkYDKqDASAS3QaT0HP2L1jMgh1qL6OGK26544MKKa2mWipTpYDe4ArE4m/LsAz9bMnEULr1jyPxXgLtfeKSh+xiZq6UUR6zjNaCJqmjh5lGrXlbx/jpk/juvshxpG1LbdbZ2+ytCg7syQroj5mQD3EFI+j5ztKQA7Iqu9+0E0G6lpKj8okhwVTU7SzkG9XTcXP6IZIpu4Z6fdwNkjmAGOs7HTZckozrkvOznLflF8SP0nAKwC4dyb977oTrCNnSxSbuQ9UQS7xq9GVhvZlJMzdU9UqFjLGZPU/T73kApJPziMd3eWX4D1y7orZRFH3/UWvzPmSwGmSCCPrETwGBmV0mFFtCh2ctRopAPa8Vxmc5T53Q6QQK2xnCf8Iyp06LRquNcDnNeR5LwVUTVGNInTlUZHCvDYqsx+XMkBuLJ5oqkoGtQ19MONkSPmOVcfr8lyn+PwxAIjw3R2EG/DozHx2SRFoyo6M+FRfeVR5tU0fxaNq6LqWwFOfoYoDa5HKFo10x3jR2SZlV7jiQ5X1FBV0AofyusqwhzdoSg7W191PWFwPQJwpAozOqdNZgBT1JFTZYYk1aquzbpPruj6coDJ452Fk7GpLs5onlJGmsduBSeJqXEMcq4sD1JVQk7vjF2i6J8N8HV3OcBz8vgRABOwrlffDRj8OhpFtsqrWZ58RJHTerKxXf2h7Janhb615e5xZLfdbg/3opOn2akOpsiIVHSYp5OXrWQl1yMAu/ojArh1jnY/6ubd9wIchH5r1GgzJGocUFTuSov/20WuBqgaNhKYfgT7R2szMTrm7P8BdDqlbdCl+bEAAAAASUVORK5CYII='

export { ADA_SYMBOL, ADA_ADDRESS, ADA_ADDRESS_QR }
