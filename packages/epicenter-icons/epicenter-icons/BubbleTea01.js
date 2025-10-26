import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18 9L16.7043 20.2292C16.5879 21.2384 15.7334 22 14.7175 22H9.2825C8.26662 22 7.41213 21.2384 7.29568 20.2292L6 9', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M6 9L6.51444 7.71391C7.41167 5.47084 9.58414 4 12 4C14.4159 4 16.5883 5.47084 17.4856 7.71391L18 9' })
const _hoisted3 = h('path', { 'd': 'M5 9L19 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M13 9L16 2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M10.0089 16.5H10M14 18H13.9911M13.0112 14H13.0023', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BubbleTea01',
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
            _hoisted5
        ])
    }
})
