import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15.999 5V3C15.999 2.44772 15.5513 2 14.999 2H8.99902C8.44674 2 7.99902 2.44772 7.99902 3V5C7.99902 5.55228 8.44674 6 8.99902 6H14.999C15.5513 6 15.999 5.55228 15.999 5Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15.999 21V19C15.999 18.4477 15.5513 18 14.999 18H8.99902C8.44674 18 7.99902 18.4477 7.99902 19V21C7.99902 21.5523 8.44674 22 8.99902 22H14.999C15.5513 22 15.999 21.5523 15.999 21Z', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M11.999 15L14.999 12L11.999 9L8.99902 12L11.999 15Z', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M9 12H6C4.89543 12 4 11.1046 4 10V6.00001C4 4.89543 4.89544 4 6.00001 4.00001L7.99862 4.00001', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M14.999 12H17.999C19.1036 12 19.999 12.8954 19.999 14V18C19.999 19.1046 19.1036 20 17.999 20H15.999', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M11.999 9V6M11.999 15V18', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Flowchart01',
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
            _hoisted4,
            _hoisted5,
            _hoisted6
        ])
    }
})
