import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.1746 18.5144L12.8742 3.57348C12.4932 2.88767 11.5068 2.88767 11.1258 3.57348L2.82536 18.5144C2.45506 19.1809 2.93703 20 3.69951 20H20.3005C21.063 20 21.5449 19.1809 21.1746 18.5144Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 20V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M19 9.5L17 11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M5 9.5L7 11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M9 20C9 17.2386 7.20914 15 5 15', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M19 15C16.7909 15 15 17.2386 15 20', 'stroke-linejoin': 'round' })
const _hoisted7 = h('path', { 'd': 'M15 7C13.3431 8.33333 10.6569 8.33333 9 7', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Triangle01',
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
            _hoisted6,
            _hoisted7
        ])
    }
})
