import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13 16.6429V18.882C13 19.6253 12.2177 20.1088 11.5528 19.7764L7.55279 17.7764C7.214 17.607 7 17.2607 7 16.882V14', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7.5 13.9974V8', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M7.5 8H5C3.89543 8 3 8.89543 3 10V12C3 13.1046 3.89543 14 5 14H7.5L16.7554 17.9666C17.5071 18.2888 18.3949 18.133 18.8995 17.4894C20.0464 16.0265 21 13.9901 21 11C21 8.00995 20.0464 5.97354 18.8995 4.51058C18.3949 3.86697 17.5071 3.71124 16.7554 4.03339L7.5 8Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Megaphone02',
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
