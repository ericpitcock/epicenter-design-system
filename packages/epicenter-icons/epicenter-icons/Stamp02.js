import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M14.5585 15H9.44152C8.58066 15 7.81638 15.5509 7.54415 16.3675L7 18H17L16.4558 16.3675C16.1836 15.5509 15.4193 15 14.5585 15Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17.4384 18H6.56155C5.64382 18 4.84385 18.6246 4.62127 19.5149L4.15532 21.3787C4.07642 21.6943 4.3151 22 4.64039 22H19.3596C19.6849 22 19.9236 21.6943 19.8447 21.3787L19.3787 19.5149C19.1561 18.6246 18.3562 18 17.4384 18Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9.94545 15C9.94545 14.0015 9.91173 11.6348 8.16412 8.26951C7.3889 6.77671 7.50635 4 7.50635 4C8.44531 3 10 2 12 2C14 2 15.5547 3 16.4936 4C16.4936 4 16.6111 6.77671 15.8359 8.26951C14.0883 11.6348 14.0546 14.0015 14.0546 15', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Stamp02',
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
