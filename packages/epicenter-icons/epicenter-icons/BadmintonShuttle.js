import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16.1051 4.2222C17.5461 3.52867 20.0003 4 21.0003 5L16.217 15.6944C16.0087 16.1294 15.9046 16.347 15.8561 16.5489C15.8076 16.7508 15.7943 17.3092 15.7677 18.4261C15.7217 20.3525 14.4797 22 12.0003 22M16.1067 4.2222C14.0543 1.25927 9.94955 1.25926 7.89715 4.2222C6.45613 3.52867 4.00195 4 3.00195 5L7.78524 15.6944C7.99349 16.1294 8.09764 16.347 8.14612 16.5489C8.1946 16.7508 8.20792 17.3092 8.23455 18.4261C8.28049 20.3525 9.52255 22 12.0019 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 17H16', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8 4L11 17M16 4L13 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M6 11.5C7.2 12.8333 8.3 12.8334 9.5 11.5C10.7 12.8333 13.3 12.8334 14.5 11.5C15.7 12.8333 16.8 12.8334 18 11.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BadmintonShuttle',
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
