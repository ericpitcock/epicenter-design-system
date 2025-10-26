import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 8C5.47582 13.3333 18.5242 13.3333 22 8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5 10L8 2L10.5965 3.33984C11.4745 3.75243 12.5255 3.75243 13.4035 3.33984L16 2L19 10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M19 11C19 13.808 18.6968 16.4602 16.4312 18.0121C14.5873 19.2751 10.8574 19.3382 10 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M5 11C5 13.808 5.30317 16.4602 7.56884 18.0121C9.41265 19.2751 13.1426 19.3382 14 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Sheriff01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4
        ])
    }
})
