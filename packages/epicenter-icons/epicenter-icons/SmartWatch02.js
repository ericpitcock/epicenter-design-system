import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M15 7H9C7.89543 7 7 7.89543 7 9V15C7 16.1046 7.89543 17 9 17H15C16.1046 17 17 16.1046 17 15V9C17 7.89543 16.1046 7 15 7Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8.5 7L9.33922 2.80388C9.43271 2.33646 9.84312 2 10.3198 2H13.6802C14.1569 2 14.5673 2.33646 14.6608 2.80388L15.5 7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8.5 17L9.33922 21.1961C9.43271 21.6635 9.84312 22 10.3198 22H13.6802C14.1569 22 14.5673 21.6635 14.6608 21.1961L15.5 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'SmartWatch02',
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
