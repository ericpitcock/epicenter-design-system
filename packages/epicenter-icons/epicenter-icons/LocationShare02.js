import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.1677 6.5C22.2774 9.04418 22.2774 11.9558 21.1677 14.5M2.83226 14.5C1.72258 11.9558 1.72258 9.04418 2.83226 6.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14.5 10.5C14.5 11.8807 13.3807 13 12 13C10.6193 13 9.5 11.8807 9.5 10.5C9.5 9.11929 10.6193 8 12 8C13.3807 8 14.5 9.11929 14.5 10.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 3.5C8.13401 3.5 5 6.57518 5 10.3686C5 14.3958 8.6928 16.4584 11.0836 19.2656C11.5528 19.8166 12.468 19.8311 12.946 19.2878C15.374 16.5281 19 14.3174 19 10.3686C19 6.57518 15.866 3.5 12 3.5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LocationShare02',
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
