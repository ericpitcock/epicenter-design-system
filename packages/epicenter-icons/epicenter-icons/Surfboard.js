import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10.0531 6.49584C13.3335 3.21301 18.5118 2.00015 22 2C22 5.48816 20.7736 10.6584 17.4931 13.9413C14.5303 16.9062 9.30775 20.0687 6.25873 21.8508C6.13626 21.9224 5.98106 21.8467 5.96088 21.7062L5.5 18.4999L2.29387 18.0419C2.15342 18.0218 2.07753 17.8666 2.14904 17.7441C3.92994 14.6926 7.09028 9.46079 10.0531 6.49584Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21 8C17 14.5 12 8 5.5 12.5' })
const _hoisted3 = h('path', { 'd': 'M7.5 16.5L8.5 15.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Surfboard',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
